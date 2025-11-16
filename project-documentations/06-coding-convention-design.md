# 06 — Coding Convention

## General
- Dùng TypeScript strict mode
- Tên file: `kebab-case`
- Tên class trong POM: PascalCase
- Tên method: camelCase

## Test rules
- 1 test = 1 hành vi (behavior)
- Không assert thừa
- Ưu tiên: `await expect(locator).toBeVisible()`

## POM rules
- Không viết logic test trong POM.
- Giữ method ngắn, rõ ràng.
