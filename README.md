# Notify: Not Tutma Uygulaması

Bu proje, kullanıcıların notlarını tutmalarına, düzenlemelerine ve silmelerine olanak tanıyan bir not tutma uygulamasıdır. Frontend kısmında React, backend kısmında ise Node.js kullanılmıştır. Veriler MongoDB veritabanında saklanmaktadır.

## Özellikler

- Kullanıcı dostu arayüz ile not oluşturma, okuma, güncelleme ve silme işlemleri
- Kullanıcıların notlarını kategorilere ayırma imkanı
- Notlar arasında hızlı arama ve filtreleme
- Notların tarih ve saate göre sıralanması
- Responsive tasarım ile mobil uyumlu
## API Kullanımı

#### Default Request

```http
  GET /
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |

Default route

#### Get All Notes

```http
  POST /create-account
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `fullName` | `string` | **Required**. Usermame |
| `email` | `string` | **Required**. User email |
| `password` | `string` | **Required**. User Password |

This route used when the user wants to create account.

```http
  POST /login
``` 

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. User email |
| `password` | `string` | **Required**. User Password |

This route used when the user wants to login.

```http
  POST /add-note
``` 

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Note title |
| `content` | `string` | **Required**.  Note content |
| `tags` | `array` | **Required**.  Note tags |
| `user`      | `object` | **Required**. current user |

This route used for create a note.

```http
  PUT /edit-note/:noteId
``` 

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `noteId`      | `string` | **Required**. ID of the note to be updated |
| `title`      | `string` | **Required**. Note title |
| `content` | `string` | **Required**.  Note content |
| `tags` | `array` | **Required**.  Note tags |
| `isPinned` | `boolean` | **Required**.  Is pinned |
| `user`      | `object` | **Required**. current user |

This route used for edit a note.


```http
  DELETE /delete-note/:noteId
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `noteId`      | `string` | **Required**. ID of the note to be deleted |
| `user`      | `object` | **Required**. current user |

This route used for delete a note.

```http
  PUT /update-note-pinned/:noteId
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `noteId`      | `string` | **Required**. ID of the note to be deleted |
| `isPinned`      | `boolean` | **Required**. isPinned value of the note to be updated |
| `user`      | `object` | **Required**. current user |

This route used for update a note isPinned property.

```http
  GET /search-notes
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. filter query for the search notes |
| `user`      | `object` | **Required**. current user |

This route used for update a note isPinned property.

```http
  GET /get-user
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `user`      | `object` | **Required**. current user |

This route used for apply the user.
## Renk Referansı

| Renk             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Mavi | ![#0000ff](https://via.placeholder.com/10/0000ff?text=+) #0000ff |
| Kırmızı | ![#FF0000](https://via.placeholder.com/10/FF0000?text=+) #FF0000 |
| Yeşil | ![#00FF00](https://via.placeholder.com/10/00FF00?text=+) #00FF00 |
| Beyaz | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff | 

## Ortam Değişkenleri

Bu projeyi çalıştırmak için aşağıdaki ortam değişkenlerini .env dosyanıza eklemeniz gerekecek

`BASE_URL`
http://localhost:8000

`CONNECTION_STRING` 
  "mongodb+srv://{your_mongodb-user]:{your-mongo-db}@{your-mongo-db-cluster}.waftqbq.mongodb.net/?retryWrites=true&w=majority&appName={your-mongo-db-app-name}
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/mehmetseezer/Notify.git
```

Proje dizinine gidin

```bash
  cd my-project
  mkdir backend
  mkdir frontend
```

requsities {frontend}

```bash
  npm install
  npm i axios
  npm i react
  npm i react-dom
  npm i react-icons
  npm i react-modal
  npm i react-router-dom
```

requsities {backend}

```bash
  npm install
  npm i cors
  npm i dotenv
  npm i express
  npm i jsonwebtoken
  npm i mongoose
  npm i nodemon
```

Start Server (Backend)

```bash
  npm start
```

Start Client (Frontend)

```bash
  npm run dev
```

  