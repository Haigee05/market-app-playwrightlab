import { test, expect } from '@playwright/test';

test('TC01 Login สำเร็จ', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page
        .getByLabel('หมายเลขโทรศัพท์มือถือ')
        .fill('0800000000');

    await page
        .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
        .fill('uCrwVaBW39o_0G0Q5QwAVrqr');

    await page
        .getByRole('button', { name: 'เข้าสู่ระบบ' })
        .click();

    await expect(
        page.getByText('ยินดีต้อนรับ')
    ).toBeVisible();

});


test('TC02 Login เบอร์โทรผิด', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page
        .getByLabel('หมายเลขโทรศัพท์มือถือ')
        .fill('0811111111');

    await page
        .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
        .fill('uCrwVaBW39o_0G0Q5QwAVrqr');

    await page
        .getByRole('button', { name: 'เข้าสู่ระบบ' })
        .click();

});


test('TC03 Login Password ผิด', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page
        .getByLabel('หมายเลขโทรศัพท์มือถือ')
        .fill('0800000000');

    await page
        .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
        .fill('wrongpassword123');

    await page
        .getByRole('button', { name: 'เข้าสู่ระบบ' })
        .click();

});

test('TC04 Login ไม่กรอกหมายเลขโทรศัพท์', async ({ page }) => {

    // 1. เปิดหน้า Login
    await page.goto('http://localhost:5173/');

    // 2. ไม่กรอกหมายเลขโทรศัพท์

    // 3. กรอกรหัสผ่าน
    await page
        .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
        .fill('uCrwVaBW39o_0G0Q5QwAVrqr');

    // 4. กดปุ่มเข้าสู่ระบบ
    await page
        .getByRole('button', { name: 'เข้าสู่ระบบ' })
        .click();

    // 5. ตรวจสอบว่ายังอยู่หน้า Login
    await expect(
        page.getByLabel('หมายเลขโทรศัพท์มือถือ')
    ).toBeVisible();

});

test('TC05 Login ไม่กรอกรหัสผ่าน', async ({ page }) => {

    // 1. เปิดหน้า Login
    await page.goto('http://localhost:5173/');

    // 2. กรอกหมายเลขโทรศัพท์
    await page
        .getByLabel('หมายเลขโทรศัพท์มือถือ')
        .fill('0800000000');

    // 3. ไม่กรอกรหัสผ่าน

    // 4. กดปุ่มเข้าสู่ระบบ
    await page
        .getByRole('button', { name: 'เข้าสู่ระบบ' })
        .click();

    // 5. ตรวจสอบว่ายังอยู่หน้า Login
    await expect(
        page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
    ).toBeVisible();

});

test('TC06 Login ไม่กรอกข้อมูล', async ({ page }) => {

    // 1. เปิดหน้า Login
    await page.goto('http://localhost:5173/');

    // 2. ไม่กรอกหมายเลขโทรศัพท์
    // 3. ไม่กรอกรหัสผ่าน

    // 4. กดปุ่มเข้าสู่ระบบ
    await page
        .getByRole('button', { name: 'เข้าสู่ระบบ' })
        .click();

    // 5. ตรวจสอบว่ายังอยู่หน้า Login
    await expect(
        page.getByLabel('หมายเลขโทรศัพท์มือถือ')
    ).toBeVisible();

});