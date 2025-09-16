// Data artikel cyber security (7 artikel)
const articles = [
    {
        id: 1,
        title: "Phishing: Ancaman Email Berbahaya dan Cara Menghindarinya",
        excerpt: "Phishing adalah teknik penipuan siber yang menggunakan email palsu untuk mencuri informasi pribadi. Pelajari cara mengidentifikasi dan menghindari serangan phishing yang semakin canggih ini.",
        content: `
            <p>Phishing merupakan salah satu ancaman cyber security yang paling umum dan berbahaya di era digital ini. Serangan ini menggunakan email, SMS, atau website palsu untuk mengelabui korban agar memberikan informasi sensitif seperti password, nomor kartu kredit, atau data pribadi lainnya.</p>
            
            <p>Teknik phishing terus berkembang dengan semakin canggihnya teknologi. Para penyerang kini menggunakan artificial intelligence dan machine learning untuk membuat email phishing yang hampir tidak bisa dibedakan dari email asli dari institusi terpercaya seperti bank, e-commerce, atau perusahaan teknologi besar.</p>
            
            <p><strong>Jenis-jenis Serangan Phishing:</strong></p>
            <p>1. <strong>Email Phishing</strong> - Bentuk paling umum yang menggunakan email palsu yang menyamar sebagai komunikasi resmi dari perusahaan tepercaya.</p>
            
            <p>2. <strong>Spear Phishing</strong> - Serangan yang lebih terarah dan personal, biasanya menargetkan individu atau organisasi tertentu dengan informasi yang sudah dikumpulkan sebelumnya.</p>
            
            <p>3. <strong>Whaling</strong> - Jenis spear phishing yang menargetkan eksekutif senior atau individu dengan akses ke informasi sensitif perusahaan.</p>
            
            <p>4. <strong>Vishing (Voice Phishing)</strong> - Menggunakan panggilan telepon untuk memperoleh informasi sensitif dengan menyamar sebagai pihak yang dapat dipercaya.</p>
            
            <p><strong>Cara Mengenali Email Phishing:</strong></p>
            <p>• Alamat pengirim yang mencurigakan atau tidak resmi<br>
            • Kesalahan tata bahasa dan ejaan<br>
            • Permintaan informasi sensitif melalui email<br>
            • Link yang mencurigakan atau tidak sesuai dengan domain resmi<br>
            • Ancaman atau urgensi yang berlebihan</p>
            
            <p><strong>Langkah Pencegahan:</strong></p>
            <p>Selalu verifikasi identitas pengirim melalui channel komunikasi yang berbeda, jangan pernah memberikan informasi sensitif melalui email, gunakan two-factor authentication, dan selalu periksa URL dengan teliti sebelum memasukkan informasi login.</p>
        `,
        tags: ["phishing", "email", "security", "penipuan"],
        date: "2025-09-15",
        category: "Email Security"
    },
    {
        id: 2,
        title: "Ransomware: Virus Penyandera Data yang Meresahkan",
        excerpt: "Ransomware adalah jenis malware yang mengenkripsi file korban dan meminta tebusan untuk membukanya. Ketahui cara kerja ransomware dan langkah-langkah pencegahannya.",
        content: `
            <p>Ransomware telah menjadi ancaman serius bagi perusahaan dan individu di seluruh dunia. Jenis malware ini bekerja dengan cara mengenkripsi file-file penting di komputer korban, kemudian meminta pembayaran tebusan dalam bentuk cryptocurrency untuk memberikan kunci dekripsi.</p>
            
            <p>Serangan ransomware tidak hanya menyasar komputer pribadi, tetapi juga infrastruktur kritis seperti rumah sakit, sistem transportasi, dan fasilitas pemerintahan. Dampak finansial dari serangan ransomware global mencapai miliaran dollar setiap tahunnya.</p>
            
            <p><strong>Cara Kerja Ransomware:</strong></p>
            <p>Ransomware biasanya masuk ke sistem melalui email phishing, exploit kit, atau remote desktop protocol (RDP) yang tidak aman. Setelah berhasil masuk, ransomware akan mulai mengenkripsi file-file dengan ekstensi tertentu seperti dokumen, gambar, video, dan database.</p>
            
            <p><strong>Jenis-jenis Ransomware Terkenal:</strong></p>
            <p>• <strong>WannaCry</strong> - Menyerang sistem Windows dengan memanfaatkan kerentanan EternalBlue</p>
            <p>• <strong>Locky</strong> - Menyebar melalui email spam dengan attachment berbahaya</p>
            <p>• <strong>CryptoLocker</strong> - Salah satu ransomware pertama yang menggunakan enkripsi RSA</p>
            <p>• <strong>Ryuk</strong> - Menargetkan perusahaan besar dengan permintaan tebusan yang tinggi</p>
            
            <p><strong>Strategi Pencegahan:</strong></p>
            <p>1. Backup data secara teratur ke storage yang terpisah dari jaringan utama<br>
            2. Update sistem operasi dan software secara berkala<br>
            3. Gunakan antivirus dengan fitur real-time protection<br>
            4. Implementasikan network segmentation<br>
            5. Edukasi karyawan tentang email phishing dan social engineering</p>
            
            <p><strong>Langkah Jika Terkena Ransomware:</strong></p>
            <p>Jangan panik dan jangan langsung membayar tebusan. Isolasi sistem yang terinfeksi, laporkan ke authorities, dan gunakan backup untuk recovery data. Pembayaran tebusan tidak menjamin data akan dikembalikan dan malah bisa memotivasi penyerang untuk melakukan serangan lagi.</p>
        `,
        tags: ["ransomware", "malware", "enkripsi", "backup"],
        date: "2025-09-14",
        category: "Malware Protection"
    },
    {
        id: 3,
        title: "Malware: Jenis-jenis Perangkat Lunak Berbahaya",
        excerpt: "Malware adalah istilah umum untuk perangkat lunak berbahaya yang dapat merusak sistem komputer. Pelajari berbagai jenis malware dan cara melindungi diri dari serangannya.",
        content: `
            <p>Malware atau malicious software mencakup berbagai jenis program berbahaya seperti virus, worm, trojan, spyware, dan adware. Setiap jenis memiliki cara kerja dan tujuan yang berbeda, namun semuanya dapat merusak sistem atau mencuri data sensitif dari korbannya.</p>
            
            <p><strong>Jenis-jenis Malware:</strong></p>
            
            <p><strong>1. Virus</strong><br>
            Program berbahaya yang dapat mereplikasi diri dengan menempel pada file atau program lain. Virus memerlukan host untuk menyebar dan biasanya menginfeksi file executable (.exe).</p>
            
            <p><strong>2. Worm</strong><br>
            Berbeda dengan virus, worm dapat menyebar secara mandiri tanpa memerlukan host. Worm sering menyebar melalui jaringan dan dapat mengkonsumsi bandwidth serta resources sistem secara signifikan.</p>
            
            <p><strong>3. Trojan Horse</strong><br>
            Program yang menyamar sebagai software legitimate namun sebenarnya berisi kode berbahaya. Trojan sering digunakan untuk membuat backdoor di sistem korban.</p>
            
            <p><strong>4. Spyware</strong><br>
            Malware yang dirancang untuk mengumpulkan informasi pribadi dan mengirimkannya ke pihak ketiga tanpa sepengetahuan korban. Spyware dapat mencuri password, riwayat browsing, dan data sensitif lainnya.</p>
            
            <p><strong>5. Adware</strong><br>
            Program yang menampilkan iklan yang tidak diinginkan dan dapat memperlambat kinerja sistem. Meskipun tidak selalu berbahaya, adware dapat mengganggu pengalaman pengguna.</p>
            
            <p><strong>6. Rootkit</strong><br>
            Malware yang dirancang untuk bersembunyi di dalam sistem operasi dengan memodifikasi fungsi-fungsi sistem. Rootkit sangat sulit dideteksi karena beroperasi di level yang sangat dalam.</p>
            
            <p><strong>Metode Penyebaran Malware:</strong></p>
            <p>• Email attachment berbahaya<br>
            • Download dari website tidak terpercaya<br>
            • USB drive yang terinfeksi<br>
            • Exploit kit melalui website yang dikompromikan<br>
            • Social engineering dan phishing</p>
            
            <p><strong>Cara Perlindungan:</strong></p>
            <p>Install antivirus terpercaya dengan update definition yang regular, hindari download software dari source yang tidak jelas, selalu update sistem operasi, gunakan firewall, dan berhati-hati dengan email attachment.</p>
        `,
        tags: ["malware", "virus", "trojan", "antivirus"],
        date: "2025-09-13",
        category: "Threat Analysis"
    },
    {
        id: 4,
        title: "Social Engineering: Manipulasi Psikologis dalam Cyber Crime",
        excerpt: "Social engineering adalah teknik manipulasi psikologis yang digunakan hacker untuk mendapatkan akses tidak sah. Kenali berbagai bentuk social engineering dan cara mengatasinya.",
        content: "Social engineering mengandalkan kelemahan manusia daripada teknologi. Penyerang menggunakan manipulasi psikologis untuk mengelabui korban agar memberikan akses atau informasi rahasia. Teknik ini sangat efektif karena memanfaatkan sifat alami manusia seperti kepercayaan dan keinginan untuk membantu.",
        tags: ["social engineering", "manipulasi", "hacker", "awareness"],
        date: "2025-09-12",
        category: "Human Factor"
    },
    {
        id: 5,
        title: "Password Security: Pentingnya Kata Sandi yang Kuat",
        excerpt: "Password yang lemah adalah pintu masuk bagi cybercriminal. Pelajari cara membuat password yang kuat dan menggunakan password manager untuk keamanan maksimal.",
        content: "Password merupakan lini pertahanan pertama dalam keamanan digital. Password yang lemah dapat dengan mudah dipecahkan oleh hacker menggunakan berbagai teknik seperti brute force attack, dictionary attack, atau rainbow table. Password yang kuat harus memiliki kombinasi huruf besar, huruf kecil, angka, dan simbol.",
        tags: ["password", "authentication", "security", "manager"],
        date: "2025-09-11",
        category: "Access Control"
    },
    {
        id: 6,
        title: "WiFi Public: Risiko Keamanan yang Tersembunyi",
        excerpt: "WiFi publik gratis memang menggiurkan, tapi menyimpan risiko keamanan yang serius. Ketahui bahaya menggunakan WiFi public dan cara browsing yang aman di hotspot umum.",
        content: "WiFi public menawarkan kemudahan akses internet gratis namun juga risiko keamanan yang tinggi. Jaringan WiFi publik umumnya tidak terenkripsi atau menggunakan enkripsi lemah, sehingga data yang dikirimkan dapat dengan mudah disadap oleh penyerang yang berada dalam jangkauan yang sama.",
        tags: ["wifi", "public", "hotspot", "encryption"],
        date: "2025-09-10",
        category: "Network Security"
    },
    {
        id: 7,
        title: "Data Breach: Kebocoran Data dan Dampaknya",
        excerpt: "Data breach atau kebocoran data dapat menimbulkan kerugian besar bagi perusahaan dan individu. Pelajari penyebab data breach dan cara mencegahnya.",
        content: "Data breach terjadi ketika informasi sensitif diakses tanpa izin oleh pihak yang tidak berwenang. Insiden ini dapat terjadi karena berbagai faktor seperti kelemahan sistem keamanan, serangan siber, atau kelalaian karyawan. Dampaknya bisa sangat merugikan baik dari segi finansial maupun reputasi.",
        tags: ["data breach", "kebocoran", "privacy", "compliance"],
        date: "2025-09-09",
        category: "Data Protection"
    }
];

// Fungsi untuk mendapatkan semua artikel
function getAllArticles() {
    return articles;
}

// Fungsi untuk mencari artikel berdasarkan query
function searchArticles(query) {
    const searchTerm = query.toLowerCase();
    
    return articles.filter(article => {
        // Cari di title
        const titleMatch = article.title.toLowerCase().includes(searchTerm);
        
        // Cari di excerpt
        const excerptMatch = article.excerpt.toLowerCase().includes(searchTerm);
        
        // Cari di content
        const contentMatch = article.content.toLowerCase().includes(searchTerm);
        
        // Cari di tags
        const tagsMatch = article.tags.some(tag => 
            tag.toLowerCase().includes(searchTerm)
        );
        
        // Cari di category
        const categoryMatch = article.category.toLowerCase().includes(searchTerm);
        
        return titleMatch || excerptMatch || contentMatch || tagsMatch || categoryMatch;
    });
}