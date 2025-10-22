# Test Cases (Manual)

## UI: SauceDemo - Login
**TC-UI-001**: Geçersiz Parola ile Giriş Hatası  
- Adımlar: standard_user / wrong_password → Login  
- Beklenen: "Username and password do not match" hatası.

**TC-UI-002**: Geçerli Kullanıcı ile Giriş  
- Adımlar: standard_user / secret_sauce → Login  
- Beklenen: /inventory açılır, en az 1 ürün görünür.

**TC-UI-003**: Sepete Ürün Ekle  
- Adımlar: Giriş → ilk üründe **Add to cart**  
- Beklenen: sepet rozeti `1`.

## API: ReqRes
**TC-API-001**: GET /users?page=2 → 200 ve data listesi  
**TC-API-002**: POST /users → 201, dönen name/job eşleşir, id dolu  
**TC-API-003**: GET /users/23 → 404
