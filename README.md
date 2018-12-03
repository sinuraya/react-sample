# React Sample

Untuk menjalankan:
1. ketikkan di CLI (Command Line Interpreter):
```
$ yarn
```
2. Ketikkan di cli: 
```
$ yarn start
```
3. ketikkan di cli: 
```
$ cd build
```
4. ketikkan di cli:
```
$ surge
```
5. jalankan di browser: http://<nama-domain-yang-ditentukan-pada-langkah-4>.surge.sh
   

Jawaban untuk pertanyaan - pertanyaan pada lembar soal:
1. Teknis Slicing pada PSD file. Slicing pada Adobe Photoshop dapat dilakukan dengan menggunakan Slice Tools dan Slice Select Tools. Ada beberapa teknik slicing yang bisa dilakukan, tetapi akan lebih gampang jika dari awal PSD direncanakan untuk bisa di-sclice, yakni dengan membuat layer based slice. 

2. State Management adalah managemen data yang beredar dalam suatu life-cycle aplikasi yang menggunakan pattern reactive programming. Pattern reactive menurut saya muncul akibat kemudahan untuk mengkomposisikan komponen seperti yang selama ini dialami dalam memprogram aplikasi web. Pada aplikasi web, kita dapat menempatkan suatu komponen (DOM) dalam komponen lainnya dengan mudah. Tapi masalah baru muncul yakni bagaimana mempertukarkan data antar komponen sementara kemudahan mengkomposisikan (composable) dan menggunakan kembali (reusable) tetap bisa dipertahankan. 

Jika pada pemrograman visual seperti Visual Basic .Net, setiap komponen sudah diberi ID sehingga framework dengan mudah melemparkan data ke komponen yang dimaksud. Pattern yang biasa dipakai dalam pemrograman visual adalah event driven programming. Pattern ini memang sederhana dalam hal manajemen data tetapi sulit untuk dikomposisikan tampilannya seperti halnya html.

Kembali kepada pattern reactive programming tadi, manajemen data kemudian dilakukan dengan cara menyediakan data dalam bentuk state yang nilainya tetap. Jika nilai state di ubah maka seluruh komponen dibuat ulang. Dengan demikian maka sebuah komponen tidak perlu ditracking ID nya dan dapat dihapus atau dibuat kapan saja tampilannya (reusable), selain itu komponen dapat ditempatkan di mana saja (composable).

Pada framework React (React Bative atau React Js) State Management bisa dikategorikan menjadi 2 yakni:
2.a. Local State Management
2.b. Global State Management

Dalam prakteknya kedua state management ini sering dipakai secara bersama - sama. Contoh penggunaannya adalah dalam tampilan login seperti yang ada dalam repository ini. Local State management dipakai ketika ada perubahan tampilan komponen kalender, sementara Global State Management dipakai ketika User melakukan login.

3. Saya akan melihat dari sisi UI/UX lalu kemudian dari sisi readability script yang digunakan.
4. Membuat UX yang tepat dan melakukan konsolidasi dengan bagian backend agar bisa diimplementasikan UX yang dikehendaki itu.
5. Saya biasanya:
   5.1. Membuat empty project di Gitlab atau GitHub kemudian mengkloning nya di local
   5.2. Membuat setting agar hanya tim saya saja yang bisa akses untuk push
   5.3. Membuat setting agar ada notifikasi ke Telegram atau Slack jika ada event seperti push, comment, issue dll
   5.4. Membuat branch - branch yang dibutuhkan seperti branch master, dev dan testing
   5.5. Biasanya saya dan tim akan memakai branch dev atau testing, dan branch master akan dipakai jika sudah pasti tidak ada masalah dengan codingan lama.
   5.6. Melakukan push/pull pada branch yang diassign
   5.7. Melakukan merge pada branch master jika ada pull/merge request
6. Saya bersedia onsite jika dibutuhkan namun hanya dalam jangka waktu yang singkat. Saya akan bekerja sesuai dengan jam kerja agar sinkron dengan teman2 yang bekerja pada jam tersebut. Komunikasi biasanya saya lakukan melaui Telegram atau Slack. 
