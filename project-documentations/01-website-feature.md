# 01 — Website Features & Test Notes

**Target**: `https://pw-practice-dev.playwrightvn.com`

## Tổng quan website
Trang thử nghiệm WordPress Admin: `/wp-admin`, bao gồm:
- Login / Logout
- Dashboard
- User Management (tạo user, edit user, delete user)
- Menu hiển thị theo role (Admin / Editor / Subscriber)

## Lưu ý khi test
- WordPress load tương đối ổn định nhưng đôi khi UI render hơi chậm ở user-list.
- Một số menu hiển thị/ẩn theo role → cần assert rõ ràng.
- Khi tạo user, checkbox “Confirm weak password” có thể bị delay 0.2–0.5s.

## Vấn đề tiềm ẩn
- XPath đôi khi chậm hơn Role, ID → ưu tiên ID / CSS nếu có.
- Chuyển trang sau login cần assert URL và heading để tránh flaky.