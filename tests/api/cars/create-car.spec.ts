import { test, expect, type APIRequestContext } from '@playwright/test';

type CarReference = {
  carBrandId: number;
  carModelId: number;
};

async function getValidCarReference(request: APIRequestContext): Promise<CarReference> {
  const brandsResponse = await request.get('/api/cars/brands');
  expect(brandsResponse.ok(), 'car brands should be available').toBeTruthy();

  const brandsBody = await brandsResponse.json();
  const brand = brandsBody.data?.[0];
  expect(brand, 'at least one car brand should be available').toBeTruthy();

  const modelsResponse = await request.get(`/api/cars/models?carBrandId=${brand.id}`);
  expect(modelsResponse.ok(), 'models for the selected brand should be available').toBeTruthy();

  const modelsBody = await modelsResponse.json();
  const model = modelsBody.data?.[0];
  expect(model, 'at least one model should be available for the selected brand').toBeTruthy();

  return { carBrandId: brand.id, carModelId: model.id };
}

test.describe('Cars API - create car', () => {
  test('creates a car with valid data', async ({ page }) => {
    const { carBrandId, carModelId } = await getValidCarReference(page.request);
    const mileage = 12345;

    const response = await page.request.post('/api/cars', {
      data: { carBrandId, carModelId, mileage },
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.status).toBe('ok');
    expect(body.data).toMatchObject({ carBrandId, carModelId, mileage });
    expect(body.data.id).toBeDefined();
  });

  test('rejects a request without a required car model', async ({ page }) => {
    const { carBrandId } = await getValidCarReference(page.request);

    const response = await page.request.post('/api/cars', {
      data: { carBrandId, mileage: 12345 },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.status).toBe('error');
  });

  test('rejects a car with negative mileage', async ({ page }) => {
    const { carBrandId, carModelId } = await getValidCarReference(page.request);

    const response = await page.request.post('/api/cars', {
      data: { carBrandId, carModelId, mileage: -1 },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.status).toBe('error');
  });
});
