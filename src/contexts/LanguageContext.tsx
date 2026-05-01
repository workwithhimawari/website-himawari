import React, { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "ID" | "EN" | "JP";

interface Translations {
  [key: string]: {
    ID: string;
    EN: string;
    JP: string;
  };
}

export const translations: Translations = {
  // Navbar
  about: { ID: "Tentang", EN: "About", JP: "私たちについて" },
  members: { ID: "Anggota", EN: "Members", JP: "メンバー" },
  news: { ID: "Berita", EN: "News", JP: "ニュース" },
  merch: { ID: "Merchandise", EN: "Merch", JP: "グッズ" },

  // Hero
  heroTitle: { ID: "HIMAWARI", EN: "HIMAWARI", JP: "HIMAWARI" },
  heroWelcome: {
    ID: "SELAMAT DATANG DI TAMAN KAMI!",
    EN: "WELCOME TO OUR GARDEN!",
    JP: "私たちの庭へようこそ！"
  },
  heroSubtitle: {
    ID: "Hangat Bagai Mentari, Indah Seperti Bunga Matahari",
    EN: "Warm Like The Sun, Beautiful Like A Sunflower",
    JP: "太陽のように温かく、ひまわりのように美しく"
  },
  heroDescription: {
    ID: "Satu keluarga. Satu panggung. Energi tak terbatas.",
    EN: "One family. One stage. Limitless energy.",
    JP: "一つの家族。一つのステージ。無限のエネルギー。"
  },
  meetMembers: { ID: "Kenali Kami", EN: "Meet Us", JP: "メンバー紹介" },
  shopNow: { ID: "Belanja Sekarang", EN: "Shop Now", JP: "今すぐ購入" },

  // About Cards
  aboutCard1Title: { ID: "PANGGUNG & IMPIAN", EN: "STAGE & DREAMS", JP: "ステージと夢" },
  aboutCard1Desc: {
    ID: "Lahir dari kecintaan pada panggung dan semangat untuk terus berkarya bersama.",
    EN: "Born from a love of the stage and the passion to keep creating together.",
    JP: "ステージへの愛と共に創り続ける情熱から生まれました。"
  },
  aboutCard2Title: { ID: "MUSIK & PERFORMA", EN: "MUSIC & PERFORMANCE", JP: "音楽とパフォーマンス" },
  aboutCard2Desc: {
    ID: "Dance cover, original song, dan pertunjukan penuh energi yang menginspirasi.",
    EN: "Dance covers, original songs, and high-energy performances that inspire.",
    JP: "ダンスカバー、オリジナル曲、そしてインスパイアするハイエナジーパフォーマンス。"
  },
  aboutCard3Title: { ID: "KOMUNITAS & CINTA", EN: "COMMUNITY & LOVE", JP: "コミュニティと愛" },
  aboutCard3Desc: {
    ID: "Bersama fans, kami tumbuh menjadi taman bunga matahari yang penuh kehangatan.",
    EN: "With our fans, we grow into a sunflower garden full of warmth.",
    JP: "ファンと共に、温かさに満ちたひまわり畑に成長します。"
  },

  // About Text - VERSI LENGKAP 3 BAHASA (sudah diupdate)
  aboutText: {
    ID: "Himawari adalah proyek girl group dance cover & idol project yang terbentuk dari kecintaan kami pada panggung, impian, dan satu sama lain. Nama \"Himawari\" diambil dari bunga matahari—simbol harapan, kekuatan, dan cahaya yang selalu menghadap matahari, bahkan saat langit sedang mendung. Kami percaya bahwa di tengah kegelapan, setiap langkah kecil menuju cahaya punya makna besar. Perjalanan kami dimulai dari sebuah tempat sederhana, namun penuh impian. Layaknya menjelajah hutan untuk menemukan langit biru, kami terus berjalan bersama—jatuh, bangkit, dan tumbuh. Setiap anggota Himawari membawa warna unik mereka sendiri, namun saat bersama, kami mekar menjadi satu taman penuh semangat dan cerita. Lewat pertunjukan, musik, dan momen kecil yang kami bagikan, kami ingin menyampaikan kehangatan dan kekuatan untuk terus mengejar cahaya di hati semua orang. Welcome to our garden. Let's bloom together. 🌻✨",
    EN: "Himawari is a girl group dance cover & idol project born from our love for the stage, our dreams, and each other. The name \"Himawari\" is taken from the sunflower—a symbol of hope, strength, and light that always faces the sun, even when the sky is cloudy. We believe that in the midst of darkness, every small step toward light holds great meaning. Our journey began from a simple place, yet full of dreams. Like exploring a forest to find the blue sky, we keep walking together—falling, rising, and growing. Each Himawari member brings their own unique color, but together, we bloom into one garden full of passion and stories. Through performances, music, and the small moments we share, we want to spread warmth and strength to keep chasing the light in everyone's heart. Welcome to our garden. Let's bloom together. 🌻✨",
    JP: "Himawariは、ステージへの愛、夢、そしてお互いへの愛から生まれたガールズグループ・ダンスカバー＆アイドルプロジェクトです。「Himawari（ひまわり）」という名前は、曇り空でも常に太陽に向かう希望、強さ、光の象徴であるひまわりから取られています。私たちは、暗闇の中でも、光に向かう小さな一歩一歩に大きな意味があると信じています。私たちの旅は、質素な場所から始まりましたが、夢に満ちていました。青空を見つけるために森を探検するように、私たちは一緒に歩き続けます—転んでも、立ち上がり、成長していきます。Himawariの各メンバーはそれぞれユニークな色を持っていますが、一緒になると、情熱と物語に満ちた一つの庭園として花開きます。パフォーマンス、音楽、そして私たちが共有する小さな瞬間を通じて、皆さんの心の中で光を追い続ける温かさと強さを届けたいと思っています。私たちの庭へようこそ。一緒に咲きましょう。🌻✨"
  },

  // News Section
  newsTitle: { ID: "BERITA TERBARU", EN: "LATEST NEWS", JP: "最新ニュース" },

  // Berita 1 - Aitakata
  newsAitakataTitle: {
    ID: "Special Collaboration – Aitakata bersama Elaine Hartanto",
    EN: "Special Collaboration – Aitakata with Elaine Hartanto",
    JP: "スペシャルコラボレーション – JKT48の『会いたかった』 with エレイン・ハルタント"
  },
  newsAitakataContent: {
    ID: "Sabtu, 2 Desember 2023, Himawari menghadirkan kolaborasi spesial dalam membawakan lagu Aitakata milik JKT48. Kolaborasi ini semakin istimewa dengan kehadiran mantan member JKT48, Elaine Hartanto, yang kini aktif di dunia jejepangan dan cosplay. Acara berlangsung di Rooftop Dinoyo Mall, Kota Malang, dengan atmosfer intimate namun tetap penuh antusiasme penonton. Momen ini menjadi salah satu highlight perjalanan Himawari dalam menghadirkan pengalaman panggung yang berkesan bagi komunitas dan fans.",
    EN: "On Saturday, December 2, 2023, Himawari presented a special collaboration performing JKT48's Aitakata. This collaboration became even more special with the presence of former JKT48 member Elaine Hartanto, now active in the cosplay and Japanese culture community. The event took place at Rooftop Dinoyo Mall, Malang City, with an intimate atmosphere yet full of enthusiastic audience. This moment became one of the highlights of Himawari's journey in delivering memorable stage experiences for the community and fans.",
    JP: "2023年12月2日土曜日、HimawariはJKT48の『会いたかった』を披露するスペシャルコラボレーションを開催しました。このコラボレーションは、元JKT48メンバーのエレイン・ハルタントの参加によりさらに特別なものになりました。現在はコスプレと日本文化コミュニティで活躍中です。イベントはマラン市のRooftop Dinoyo Mallで行われ、親密な雰囲気ながら熱狂的な観客で満ちていました。この瞬間は、Himawariがコミュニティとファンに忘れがたいステージ体験を提供する旅のハイライトの一つとなりました。"
  },

  // Berita 2 - 1st Anniversary
  news1stAnniversaryTitle: {
    ID: "1st Anniversary Himawari – Himawari no Matsuri: Harmony in Diversity",
    EN: "1st Anniversary Himawari – Himawari no Matsuri: Harmony in Diversity",
    JP: "Himawari 1周年 – ひまわりの祭り：Harmony in Diversity"
  },
  news1stAnniversaryContent: {
    ID: "Pada 22 September 2024, komunitas Himawari merayakan anniversary pertamanya lewat event bertajuk Himawari no Matsuri: Harmony in Diversity yang digelar di HI5FIVE Lounge Lt. 3, Kota Malang. Acara ini membawakan 10 lagu dengan konsep keberagaman dan kebersamaan dalam satu panggung. Suasana semakin meriah dengan kehadiran idol lokal Akarui serta penampilan spesial dari DJ NiiJu. Perayaan ini menjadi bukti satu tahun perjalanan Himawari dalam membangun ruang kreatif dan solid di komunitas jejepangan Malang.",
    EN: "On September 22, 2024, the Himawari community celebrated their first anniversary through an event titled Himawari no Matsuri: Harmony in Diversity held at HI5FIVE Lounge 3rd Floor, Malang City. The event featured 10 songs with a concept of diversity and togetherness on one stage. The atmosphere became even more lively with the presence of local idol Akarui and a special performance by DJ NiiJu. This celebration is proof of one year of Himawari's journey in building a creative and solid space in the Malang Japanese culture community.",
    JP: "2024年9月22日、Himawariコミュニティはマラン市のHI5FIVE Lounge 3階で「Himawari no Matsuri: Harmony in Diversity」というイベントを通じて1周年を祝いました。このイベントでは、多様性と一体感をテーマにした10曲が1つのステージで披露されました。地元アイドルAkaruiの登場とDJ NiiJuのスペシャルパフォーマンスで雰囲気はさらに盛り上がりました。この祝賀は、マラン日本文化コミュニティで創造的で強固な空間を築くHimawariの1年間の旅の証です。"
  },

  // Berita 3 - Debut Single
  newsDebutSingleTitle: {
    ID: "Gandeng Ravan Axent, HIMAWARI Rilis Debut Single \"Kisah Bunga Matahari\"",
    EN: "Collaborating with Ravan Axent, HIMAWARI Releases Debut Single \"Kisah Bunga Matahari\"",
    JP: "Ravan Axentとコラボ、HIMAWARIがデビューシングル「Kisah Bunga Matahari」をリリース"
  },
  newsDebutSingleContent: {
    ID: "Malang, 30 Juli 2025 - HIMAWARI, Idol group asal Malang resmi meramaikan belantika dunia Chika Idol dan dunia musik Indonesia dengan single perdana berjudul 'Kisah Bunga Matahari' yang telah mengudara di seluruh platform music digital.\n\"Kisah Bunga Matahari\" merupakan single yang mengusung genre Japanese Rock yang powerful dengan sentuhan melodi anisong yang memanjakan telinga, sehingga menjadikan lagu ini memberikan cita rasa baru bagi para penggemar Chika Idol Indonesia.\n\"Kisah Bunga Matahari\" sendiri merupakan refleksi dua tahun perjalanan HIMAWARI sebagai sebuah grup, di mana dalam perjalanan tersebut tidak selalu berjalan mulus. Ada pasang dan surut, ada momen suka dan duka yang dilalui bersama dengan keyakinan bahwa ujung dari perjalanan ini akan berakhir dengan indah.\n'Kisah Bunga Matahari' juga merupakan tribut para member HIMAWARI untuk para 'Hamtaro' (sebutan fans HIMAWARI) dan juga 'Klub Bunga Matahari' (nama fandom HIMAWARI) yang telah setia menemani perjalanan HIMAWARI sejak debut pertama hingga hari ini.  Single ini juga merupakan single kelulusan dua member HIMAWARI, yaitu Chacha dan Mina yang memutuskan untuk graduate di bulan Juni lalu.\n“Setelah penantian, ini adalah cerita pertama kami. Kisah Bunga Matahari adalah mimpi. Sebuah lagu tentang bertahan dan harapan. Untuk semua Hamtaro, ini adalah peluk hangat yang akhirnya bisa kami kirimkan. Thank you for waiting. Thank you for believing. We hope this song will find you and remind you: ‘That it’s okay to grow slowly, That you are not alone’. Let’s bloom together, Just like sunflowers do,” ujar Nyna selaku leader dari HIMAWARI.\nSingle ini merupakan hasil kolaborasi HIMAWARI dengan Ravan Axent, komposer kenamaan yang telah malang melintang di skena musik Chika Idol Indonesia. Dikenal sebagai pencipta lagu-lagu hits dari grup-grup idol kenamaan Indonesia seperti Kohi Sekai, Minerva Land, dan Gochikara, Ravan kembali menunjukkan kepiawaiannya dalam meramu musik yang memikat, dengan aransemen energik dan lirik yang menyentuh hati.\nSingle \"Kisah Bunga Matahari\" kini sudah tersedia di seluruh platform digital streaming seperti Spotify, Apple Music, YouTube Music, dan lainnya. Video musik resminya baru akan dirilis pada tanggal 10 Agustus 2025 Pkl 19.00 WIB mendatang. \nIkuti terus perjalanan HIMAWARI melalui akun Instagram @himawaritoday, Tiktok @shininghimawari. Kalian juga bisa menyaksikan keseruan aksi Himawari di kanal Youtube resmi kami, Himawari ひまわり.\n\nTentang HIMAWARI  \nHIMAWARI adalah idol group yang terbentuk pada tahun 2023 silam. Berawal dari unit dance cover group BIG G NATION, HIMAWARI kini tumbuh menjadi Idol Group seutuhnya dengan visi menyinari dunia dengan energi positif melalui musik, performa, dan semangat pantang menyerah. Nama “Himawari,” yang berarti bunga matahari dalam bahasa Jepang, dipilih sebagai simbol harapan dan keteguhan hati.",
    EN: "Malang, July 30, 2025 - HIMAWARI, the idol group from Malang, officially enlivens the Chika Idol world and Indonesian music scene with their debut single titled 'Kisah Bunga Matahari' which has been released on all digital music platforms.\n\"Kisah Bunga Matahari\" is a single that carries a powerful Japanese Rock genre with anisong melody touches that pamper the ears, thus giving a new taste for Indonesian Chika Idol fans.\n\"Kisah Bunga Matahari\" itself is a reflection of two years of HIMAWARI's journey as a group, where the journey was not always smooth. There were ups and downs, moments of joy and sorrow experienced together with the belief that the end of this journey will end beautifully.\n'Kisah Bunga Matahari' is also a tribute from HIMAWARI members to 'Hamtaro' (HIMAWARI fans' nickname) and 'Klub Bunga Matahari' (HIMAWARI fandom name) who have faithfully accompanied HIMAWARI's journey from the first debut until today. This single is also the graduation single for two HIMAWARI members, Chacha and Mina who decided to graduate in June last.\n“After the wait, this is our first story. Kisah Bunga Matahari is a dream. A song about endurance and hope. For all Hamtaro, this is a warm hug that we can finally send. Thank you for waiting. Thank you for believing. We hope this song will find you and remind you: ‘That it’s okay to grow slowly, That you are not alone’. Let’s bloom together, Just like sunflowers do,” said Nyna as the leader of HIMAWARI.\nThis single is the result of HIMAWARI's collaboration with Ravan Axent, a renowned composer who has been through thick and thin in the Indonesian Chika Idol music scene. Known as the creator of hit songs from famous Indonesian idol groups such as Kohi Sekai, Minerva Land, and Gochikara, Ravan once again shows his expertise in crafting captivating music, with energetic arrangements and heart-touching lyrics.\nSingle \"Kisah Bunga Matahari\" is now available on all digital streaming platforms such as Spotify, Apple Music, YouTube Music, and others. The official music video will be released on August 10, 2025 at 19.00 WIB.\nKeep following HIMAWARI's journey through Instagram account @himawaritoday, Tiktok @shininghimawari. You can also watch the excitement of Himawari's actions on our official Youtube channel, Himawari ひまわり.\n\nAbout HIMAWARI\nHIMAWARI is an idol group formed in 2023. Starting from the dance cover unit group BIG G NATION, HIMAWARI has now grown into a complete Idol Group with the vision of illuminating the world with positive energy through music, performance, and unyielding spirit. The name “Himawari,” which means sunflower in Japanese, was chosen as a symbol of hope and steadfastness of heart.",
    JP: "マラン、2025年7月30日 - マラン出身のアイドルグループHIMAWARIが、初のシングル「Kisah Bunga Matahari」をリリースし、インドネシアのChika Idolシーンと音楽シーンを賑わせています。このシングルはすべてのデジタル音楽プラットフォームで配信中です。\n「Kisah Bunga Matahari」は、パワフルなJapanese Rockを基調にアニソン風のメロディーが耳を喜ばせる楽曲で、インドネシアChika Idolファンに新しい味わいを提供します。この曲自体は、HIMAWARIのグループとしての2年間の旅の反映であり、道のりは常に順風満帆ではありませんでした。浮き沈み、喜びと悲しみの瞬間を共に乗り越え、この旅の終わりが美しいものになると信じています。\n「Kisah Bunga Matahari」はHIMAWARIメンバーが「Hamtaro」（HIMAWARIファンの愛称）と「Klub Bunga Matahari」（HIMAWARIファンダム名）へのトリビュートであり、デビューから今日まで忠実に旅に付き添ってくれたファンへの感謝です。このシングルは6月に卒業を決めた2人のメンバー、ChachaとMinaの卒業シングルでもあります。\n「待ち続けてくれてありがとう。信じてくれてありがとう。この歌があなたに届き、思い出させてほしい：『ゆっくり成長しても大丈夫、一人じゃない』。一緒に咲こう、ひまわりのように。」とリーダーのNynaが語りました。\nこのシングルはHIMAWARIとインドネシアChika Idolシーンで名高い作曲家Ravan Axentのコラボレーションの成果です。Kohi Sekai、Minerva Land、Gochikaraなどの有名インドネシアアイドルグループのヒット曲を手掛けたRavanが、エネルギッシュなアレンジと心に響く歌詞で魅惑的な音楽を再び披露しています。\n「Kisah Bunga Matahari」はSpotify、Apple Music、YouTube Musicなどすべてのデジタルストリーミングプラットフォームで配信中です。公式MVは2025年8月10日19:00 WIBに公開予定です。\nInstagram @himawaritoday、TikTok @shininghimawariでHIMAWARIの旅を追い続けましょう。公式YouTubeチャンネルHimawari ひまわりでもアクティビティをお楽しみください。\n\nHIMAWARIについて\nHIMAWARIは2023年に結成されたアイドルグループです。ダンスカバーユニットBIG G NATIONから始まり、現在は音楽、パフォーマンス、諦めない精神を通じて世界をポジティブなエネルギーで照らす完全なアイドルグループに成長しました。「Himawari」という名前は日本語でひまわりを意味し、希望と心の強さの象徴として選ばれました。"
  },

  // Berita 4 - Issho ni Arukou
  newsIsshoNiArukouTitle: {
    ID: "HIMAWARI Hadirkan Semangat Baru Lewat Single Kedua, “Issho ni Arukou”",
    EN: "HIMAWARI Brings New Spirit Through Second Single, “Issho ni Arukou”",
    JP: "HIMAWARIがセカンドシングル「Issho ni Arukou」で新しいエネルギーを届ける"
  },
  newsIsshoNiArukouContent: {
    ID: "Malang, 11 November 2025 - Setelah sukses memperkenalkan diri lewat single perdana mereka “Kisah Bunga Matahari” yang rilis pada akhir Juli 2025 kemarin, grup idol asal Malang HIMAWARI kembali dengan karya terbaru berjudul “Issho ni Arukou”. Lagu ini menjadi simbol perjalanan mereka sebagai grup yang terus berkembang dan ingin menebarkan semangat positif kepada para pendengarnya.\n“Issho ni Arukou” atau dalam Bahasa Indonesia bisa diterjemahkan sebagai “Melangkah Bersama”, merupakan lagu di mana HIMAWARI ingin mengajak para pendengarnya untuk tidak menyerah pada rintangan dan tantangan dalam mengejar mimpi. Pesannya sederhana namun kuat, bahwa tidak ada halangan yang terlalu besar jika kita mau bergandeng tangan, saling percaya, dan melangkah bersama. HIMAWARI juga ingin mengingatkan semua orang bahwa dalam setiap langkah menuju mimpi, kita tidak pernah benar-benar sendirian, karena selalu ada tangan yang bisa digenggam untuk melangkah bersama.\nSecara musikal, single ini masih menghadirkan sentuhan J-rock yang powerful seperti single pertama mereka “Kisah Bunga Matahari”. Luhung Swantara, musisi asal Malang yang dipercaya menjadi komposer lagu ini mencoba memberikan warna baru untuk musik HIMAWARI. Dikenal sebagai salah satu fingerstyle guitarist Indonesia dengan pengalaman musikal yang kaya, Luhung memberikan harmoni baru antara kekuatan instrumen rock yang dipadukan dengan alunan orchestra yang menghasilkan atmosfer yang melodramatis yang megah dan mampu membangkitkan semangat para pendengarnya. \n“Bagiku, lagu ini sudah mewakili semuanya. Setiap kalimatnya adalah cerita dan harapan yang kami semogakan. Untuk Himawari, dan untuk kalian semua… meski kita tidak selamanya, tapi kita pernah bersama. Terima kasih,” ujar Nyna selaku leader dari HIMAWARI.\nSingle \"Issho ni Arukou\" kini sudah tersedia di seluruh platform digital streaming seperti Spotify, Apple Music, YouTube Music, dan lainnya. Video musik resminya baru akan dirilis pada tanggal 22 November 2025 Pkl 19.00 WIB mendatang. \nIkuti terus perjalanan HIMAWARI melalui akun Instagram @himawaritoday, Tiktok @shininghimawari. Kalian juga bisa menyaksikan keseruan aksi Himawari di kanal Youtube resmi kami, Himawari ひまわり.\n\nTentang HIMAWARI  \nHIMAWARI adalah idol group yang terbentuk pada tahun 2023 silam. Berawal dari unit dance cover group BIG G NATION, HIMAWARI kini tumbuh menjadi Idol Group seutuhnya dengan visi menyinari dunia dengan energi positif melalui musik, performa, dan semangat pantang menyerah. Nama “Himawari,” yang berarti bunga matahari dalam bahasa Jepang, dipilih sebagai simbol harapan dan keteguhan hati.",
    EN: "Malang, November 11, 2025 - After successfully introducing themselves through their debut single “Kisah Bunga Matahari” released at the end of July 2025, the Malang-based idol group HIMAWARI returns with their latest work titled “Issho ni Arukou”. This song becomes a symbol of their journey as a group that continues to grow and wants to spread positive spirit to their listeners.\n“Issho ni Arukou” or in Indonesian can be translated as “Walk Together”, is a song where HIMAWARI wants to invite listeners not to give up on obstacles and challenges in pursuing dreams. The message is simple yet strong, that no obstacle is too big if we are willing to hold hands, trust each other, and walk together. HIMAWARI also wants to remind everyone that in every step towards dreams, we are never truly alone, because there is always a hand to hold for walking together.\nMusically, this single still presents the powerful J-rock touch like their first single “Kisah Bunga Matahari”. Luhung Swantara, a Malang musician trusted as the composer of this song, tries to give a new color to HIMAWARI's music. Known as one of Indonesia's fingerstyle guitarists with rich musical experience, Luhung provides a new harmony between the power of rock instruments combined with orchestral melodies that produce a majestic melodramatic atmosphere capable of arousing the spirit of listeners.\n“For me, this song already represents everything. Every sentence is the story and hope that we wish for. For Himawari, and for all of you… even though we are not forever, but we were once together. Thank you,” said Nyna as the leader of HIMAWARI.\nSingle \"Issho ni Arukou\" is now available on all digital streaming platforms such as Spotify, Apple Music, YouTube Music, and others. The official music video will be released on November 22, 2025 at 19.00 WIB.\nKeep following HIMAWARI's journey through Instagram account @himawaritoday, Tiktok @shininghimawari. You can also watch the excitement of Himawari's actions on our official Youtube channel, Himawari ひまわり.\n\nAbout HIMAWARI\nHIMAWARI is an idol group formed in 2023. Starting from the dance cover unit group BIG G NATION, HIMAWARI has now grown into a complete Idol Group with the vision of illuminating the world with positive energy through music, performance, and unyielding spirit. The name “Himawari,” which means sunflower in Japanese, was chosen as a symbol of hope and steadfastness of heart.",
    JP: "マラン、2025年11月11日 - デビューシングル「Kisah Bunga Matahari」で成功を収めたマラン出身のアイドルグループHIMAWARIが、最新シングル「Issho ni Arukou」で帰ってきました。この曲は、成長を続けるグループとしての旅の象徴であり、聴く人にポジティブなエネルギーを広めたいという思いが込められています。\n「Issho ni Arukou」（一緒に歩こう）は、夢を追いかける上での障害や挑戦に諦めないようリスナーを誘う曲です。メッセージはシンプルですが力強く、手を取り合い、互いに信じ、一緒に歩けばどんな壁も越えられるということです。HIMAWARIは、夢に向かう一歩一歩で一人ではないこと、いつも手を握ってくれる存在がいることを思い出してほしいと願っています。\n音楽的には、最初のシングル「Kisah Bunga Matahari」のようなパワフルなJ-ロックのタッチを維持しています。マラン出身のミュージシャンLuhung Swantaraが作曲を担当し、HIMAWARIの音楽に新しい色を加えました。インドネシアのフィンガースタイルギタリストとして知られるLuhungは、ロック楽器の力強さとオーケストラの旋律を融合させ、壮大でドラマチックな雰囲気を生み出し、聴く人の心を奮い立たせます。\n「この曲はすべてを表していると思います。すべての文が私たちの物語と願いです。Himawariのために、そして皆さんのために…永遠ではないけれど、一緒にいた時間がありました。ありがとう。」とリーダーのNynaが語りました。\n「Issho ni Arukou」はSpotify、Apple Music、YouTube Musicなどすべてのデジタルストリーミングプラットフォームで配信中です。公式MVは2025年11月22日19:00 WIBに公開予定です。\nInstagram @himawaritoday、TikTok @shininghimawariでHIMAWARIの旅を追い続けましょう。公式YouTubeチャンネルHimawari ひまわりでもアクティビティをお楽しみください。\n\nHIMAWARIについて\nHIMAWARIは2023年に結成されたアイドルグループです。ダンスカバーユニットBIG G NATIONから始まり、現在は音楽、パフォーマンス、諦めない精神を通じて世界をポジティブなエネルギーで照らす完全なアイドルグループに成長しました。「Himawari」という名前は日本語でひまわりを意味し、希望と心の強さの象徴として選ばれました。"
  },

  // Berita 5 - Pandangan Pertama
  newsPandanganPertamaTitle: {
    ID: "Rayakan Hari Valentine, HIMAWARI Ajak Kamu Jatuh Cinta Lagi dengan \"Pandangan Pertama\"",
    EN: "Celebrate Valentine's Day, HIMAWARI Invites You to Fall in Love Again with \"Pandangan Pertama\"",
    JP: "バレンタインデーを祝い、HIMAWARIが「Pandangan Pertama」で再び恋に落ちるよう誘う"
  },
  newsPandanganPertamaContent: {
    ID: "Malang, 3 Februari 2026 - Idol group asal Malang, Himawari, resmi meluncurkan single ketiga mereka yang berjudul “Pandangan Pertama”. Lagu ini menjadi penanda fase baru dalam perjalanan musikal Himawari, dengan menghadirkan warna yang lebih lembut dan manis dibandingkan dua single sebelumnya.\n“Pandangan Pertama” mengangkat kisah sederhana namun universal tentang sensasi jatuh cinta pada pandangan pertama—momen ketika perasaan bermula dari tatapan mata, lalu perlahan turun ke hati. Liriknya dibalut dengan narasi yang ringan dan romantis, menggambarkan degup jantung, rasa gugup, serta kehangatan emosi yang muncul saat pertama kali merasakan ketertarikan pada seseorang.\nSecara musikal, single ini menunjukkan wajah baru Himawari. Jika dua lagu sebelumnya tampil lebih enerjik dengan nuansa rock yang ceria, “Pandangan Pertama” justru menonjolkan sisi manis dan hangat melalui melodi pop yang lembut dan mudah dinikmati. Aransemen yang minimalis namun emosional memberikan ruang bagi vokal para member untuk tampil lebih intim dan ekspresif.\nUntuk \"Pandangan Pertama\" sendiri ditulis oleh sang produser, Serafin Unus Pasi dan bekerja sama dengan Billy Sibero, seorang komposer muda berbakat yang dikenal dikalangan para fans JKT48 sebagai salah satu komposer yang kerap mengover lagu-lagu JKT48 dengan sentuhan yang manis dan berbeda.\nMelalui \"Pandangan Pertama\", Himawari ingin menunjukkan kedewasaan dalam eksplorasi musik mereka, sekaligus memperluas jangkauan pendengar dengan karya yang relevan bagi berbagai kalangan. Lagu ini diharapkan dapat menjadi teman bagi mereka yang pernah—atau sedang—mengalami manisnya jatuh cinta untuk pertama kali.\nSingle \"Pandangan Pertama\" sudah dapat didengarkan di berbagai platform musik digital mulai hari ini.",
    EN: "Malang, February 3, 2026 - The Malang-based idol group Himawari officially launches their third single titled “Pandangan Pertama”. This song marks a new phase in Himawari's musical journey, presenting a softer and sweeter color compared to the previous two singles.\n“Pandangan Pertama” raises a simple yet universal story about the sensation of falling in love at first sight—the moment when feelings begin from eye contact, then slowly descend to the heart. The lyrics are wrapped in light and romantic narration, depicting heartbeat, nervousness, and the warmth of emotions that arise when first feeling attracted to someone.\nMusically, this single shows a new face of Himawari. If the previous two songs appeared more energetic with cheerful rock nuances, “Pandangan Pertama” highlights the sweet and warm side through soft and easy-to-enjoy pop melodies. The minimalist yet emotional arrangement gives space for the members' vocals to perform more intimately and expressively.\n“Pandangan Pertama” was written by producer Serafin Unus Pasi in collaboration with Billy Sibero, a talented young composer known among JKT48 fans as one who often covers JKT48 songs with a sweet and different touch.\nThrough \"Pandangan Pertama\", Himawari wants to show maturity in their musical exploration, while expanding the reach of listeners with works relevant to various groups. This song is expected to become a companion for those who have experienced—or are experiencing—the sweetness of falling in love for the first time.\nSingle \"Pandangan Pertama\" can now be listened to on various digital music platforms starting today.",
    JP: "マラン、2026年2月3日 - マラン出身のアイドルグループHimawariが、3枚目のシングル「Pandangan Pertama」を正式にリリースしました。この曲はHimawariの音楽的旅路の新しいフェーズを示し、これまでの2枚のシングルよりも柔らかく甘い色合いを呈しています。\n「Pandangan Pertama」は、一目惚れの感覚を描いたシンプルで普遍的な物語をテーマにしています—視線から始まり、心にゆっくり降りてくる感情の瞬間です。歌詞は軽やかでロマンチックなナラティブに包まれ、鼓動、緊張、そして初めて誰かに惹かれる瞬間の温かい感情を描いています。\n音楽的には、Himawariの新しい顔を見せています。これまでの2曲が明るいロックのエネルギッシュな雰囲気だったのに対し、「Pandangan Pertama」は柔らかく親しみやすいポップメロディーで甘さと温かさを強調しています。ミニマリストでありながら感情的なアレンジは、メンバーのボーカルがより親密で表現豊かに響く余地を与えています。\n「Pandangan Pertama」はプロデューサーのSerafin Unus Pasiが書き、JKT48ファンに知られる若手作曲家Billy Siberoと共同制作しました。彼はJKT48の曲を甘く独特なタッチでカバーすることで知られています。\n「Pandangan Pertama」を通じて、Himawariは音楽探求の成熟さを示し、さまざまな層に響く作品でリスナーの幅を広げたいと考えています。この曲は、初めての恋の甘さを経験した—or している—すべての人にとっての伴侶となることを願っています。\n「Pandangan Pertama」は本日より各種デジタル音楽プラットフォームで聴けます。"
  },

  newsLatestUpdateTitle: {
    ID: "Update Terbaru HIMAWARI – Tetap Ikuti Perjalanan Kami!",
    EN: "Latest HIMAWARI Update – Keep Following Our Journey!",
    JP: "HIMAWARI最新アップデート – 私たちの旅を追い続けましょう！"
  },
  newsLatestUpdateContent: {
    ID: "Berita terbaru akan terus diupdate di sini. Follow Instagram @himawaritoday untuk info terkini, serta kunjungi kanal YouTube resmi Himawari ひまわり untuk konten eksklusif. Terima kasih telah mendukung HIMAWARI selama ini!",
    EN: "The latest news will continue to be updated here. Follow Instagram @himawaritoday for the latest info, and visit the official YouTube channel Himawari ひまわり for exclusive content. Thank you for supporting HIMAWARI all this time!",
    JP: "最新ニュースはここで継続的に更新されます。最新情報を得るためにInstagram @himawaritodayをフォローしてください。公式YouTubeチャンネルHimawari ひまわりではエクスクルーシブなコンテンツをお届けします。これまでHIMAWARIを応援してくれてありがとう！"
  },

  // Sisanya key lama kamu (jangan hapus ini, tambahkan di bawah kalau perlu)
  aboutTitle: { ID: "Tentang Himawari", EN: "About Himawari", JP: "Himawariについて" },
  // ... paste semua key lama kamu dari file asli di sini sampai akhir
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("EN");

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};