# 04 — Utils Design

## env.ts
- Dùng `dotenv + zod` đảm bảo biến môi trường hợp lệ.
- Load:
  - BASE_URL
  - APP_USERNAME
  - APP_PASSWORD

## logger.ts
- Log đơn giản để debug step chạy:
  - `log.info()`
  - `log.warn()`
  - `log.error()`

## Mục tiêu utils
- Tách biệt hoàn toàn với test/POM.
- Dễ tái sử dụng.
