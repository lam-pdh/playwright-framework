# 03 — POM Design

## Nguyên tắc
- Mỗi page = 1 class.
- Locator ưu tiên: ID > CSS > Role > XPath.
- Chỉ expose method high-level (login, createUser…)
- Không đưa assert UI trực tiếp vào test → đưa vào POM.

## POM đã tạo
### AuthPage
- `openAdminLogin()`
- `login(username, password)`
- `expectLoginError()`

### AdminDashboardPage
- `expectDashboardVisible()`
- `openNewUserForm()`
- `logout()`
- `expectEditorMenus()`
- `expectSubscriberMenus()`

### UsersPage
- `createUser()`
- `expectUserCreated()`
- `searchAndDeleteUser()`
