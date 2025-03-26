function showPlaylistPage(category) {
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.playlist-page').style.display = 'block';
    populatePlaylist(category);
    changeBackground(category);
}

function showHomePage() {
    document.querySelector('.home-page').style.display = 'flex';
    document.querySelector('.playlist-page').style.display = 'none';
}

const playlistCategory = document.getElementById('playlist-category');
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const playlistTitle = document.getElementById('playlist-title');
const navbar = document.querySelector('.navbar');
const playlistSearch = document.getElementById('playlist-search');
const playlistPage = document.getElementById('playlist-page');

const categories = {
    'sad-songs': [
        { title: 'Bekhayali', src: 'https://aac.saavncdn.com/807/db5027c7f61ea05b4f9841bfc056e1c5_160.mp4' },
        { title: 'Phir Bhi Tumko Chaahunga', src: 'https://aac.saavncdn.com/441/5be788f75761b20e5dbcecdd3069a1c4_160.mp4' },
        { title: 'Thodi Jagah', src: 'https://aac.saavncdn.com/951/f40fe87aa535a1095d095ec34892dbac_160.mp4' },
        { title: 'Bhula Dena', src: 'https://aac.saavncdn.com/430/22b12410a6a242bf9b66e8b99d02254b_160.mp4' },
        { title: 'Humko Tere Bina', src: 'https://aac.saavncdn.com/360/a02e83a99d691b0b3e02ea6a115cbf16_160.mp4' },
        { title: 'Chal Wahan Jaate Hain', src: 'https://aac.saavncdn.com/119/c12ffa2f68c31b7244034cfc641a2143_160.mp4' },
        { title: 'Zindagi Kuch Toh Bata', src: 'https://aac.saavncdn.com/128/1a24bc8c4d4303b4315f5dd192dc6116_160.mp4' },
        { title: 'Baaton Ko Teri', src: 'https://aac.saavncdn.com/850/7e1db499d6bd7ea4feb9a253e750337f_160.mp4' },
        { title: 'Filhall', src: 'https://aac.saavncdn.com/972/0206f9992772499eb7b0e5013959fd45_160.mp4' },
        { title: 'Roi Na', src: 'https://aac.saavncdn.com/824/70bb863ee5bd58371487bbf4130bac85_160.mp4' },
        { title: 'Lo Maan Liya', src: 'https://aac.saavncdn.com/311/d60d7e9b00fb632d0518d4145e3f3eb1_160.mp4' },
        { title: 'Kabhi Jo Baadal Barse', src: 'https://aac.saavncdn.com/151/98c60a124032ef442fd890cc2fdae7c7_160.mp4' },
        { title: 'Khairiyat', src: 'https://aac.saavncdn.com/937/98dfd33cd388084fd76fadf65165a10e_160.mp4' },
        { title: 'Ae Dill Hai Mushkill', src: 'https://aac.saavncdn.com/597/3b003e3fd083bad975ca12ca6f83c94d_160.mp4' },
        { title: 'Uska Hi Banana', src: 'https://aac.saavncdn.com/256/a574d8f7763495c42979a64bb75dae34_160.mp4' },
        { title: 'Kalank (Title Track)', src: 'https://aac.saavncdn.com/784/cb058de567211b7aa1d7c29a2e8f3623_160.mp4' },
        { title: 'Samay Ka Pahiya', src: 'https://aac.saavncdn.com/500/dd5b711285143513e41842212e108f55_160.mp4' },
        { title: 'Sunn Le Zara', src: 'https://aac.saavncdn.com/812/f7504934b93d1e4eeb7b7088821bf303_160.mp4' },
        { title: 'Tum Ho Mera Pyar', src: 'https://aac.saavncdn.com/721/148d82cd3272791f0ea156c4a30f01cd_160.mp4' },
        { title: 'Wakh Ho Jana', src: 'https://aac.saavncdn.com/778/b118393d1cc3580417a240043002a8bc_160.mp4' },
        { title: 'Tum Hi Ho', src: 'https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_160.mp4' },
        { title: 'Hamari Adhuri Kahani', src: 'https://aac.saavncdn.com/577/2c5bf729939345ca2e90cd29203b13ea_160.mp4' },
        { title: 'Main Dhoondne Ko Zamaane Mein', src: 'https://aac.saavncdn.com/112/7592616d8b2c04597c1ee01ec373a636_160.mp4' },
        { title: 'Yeh Jism', src: 'https://aac.saavncdn.com/198/5ba0a6c8cad8d1445d723c95b83eadf6_160.mp4' },
        { title: 'Woh Lamhe', src: 'https://aac.saavncdn.com/519/04100d0d95017e56d914c21f031d1684_160.mp4' },
        { title: 'Sanam Re', src: 'https://aac.saavncdn.com/829/7f27e1fa45fab4f803186fc87c3ff7c7_160.mp4' },
        { title: 'Tera Ban Jaunga', src: 'https://aac.saavncdn.com/385/9eaa25846f2868bbfeaf8d5e6ac7de96_160.mp4' },
        { title: 'Channa Mereya', src: 'https://aac.saavncdn.com/597/6da0627cfcc4b937160f664841e4572d_160.mp4' },
        { title: 'Mann Bharrya', src: 'https://aac.saavncdn.com/962/46a719e3fb386b2d524e069268773573_160.mp4' },
        { title: 'Ya Rabba', src: 'https://aac.saavncdn.com/440/fd2da69a5fd7bc1bdbc92ec68bc2e573_160.mp4' },
        { title: 'Ae Ajnabi', src: 'https://aac.saavncdn.com/430/ffa2b39618aaac3c3e0c288f95fd4bce_160.mp4' },
        { title: 'Tadap Tadap', src: 'https://aac.saavncdn.com/963/794af566c2a9a420b762c92c27edf333_160.mp4' },
        { title: 'Ek Raat ', src: 'https://aac.saavncdn.com/080/9467e30390c71564f0a0ff2c986afccb_160.mp4' },
        { title: 'Main Rahoon Ya Na Rahoon', src: 'https://aac.saavncdn.com/395/1e3c94b9a575aa2887f47bd38e9dc3ac_160.mp4' },
        { title: 'Judaai', src: 'https://aac.saavncdn.com/020/64bba189382229bce0fb27e9ed9153de_160.mp4' },
        { title: 'Baatein Ye Kabhi Na', src: 'https://aac.saavncdn.com/378/b3ad78940f0ef4a96f588f9b4f03df27_160.mp4' },
        { title: 'Tera Zikr', src: 'https://aac.saavncdn.com/820/3d732a9092272f172cd6a25cab3244d6_160.mp4' },
        { title: 'Tose Naina', src: 'https://aac.saavncdn.com/530/0bf9c93fa6ad726982ac2a090a3deb31_160.mp4' },
        { title: 'Tujhe Bhula Diya', src: 'https://aac.saavncdn.com/113/d6e034a772195e6cf855f76c09e7b217_160.mp4' },
        { title: 'Abhi Mujh Mein Kahin (Rewind Version)', src: 'https://aac.saavncdn.com/805/7832cac3529df3b08734a9681787aebd_160.mp4' },
        { title: 'Jeene Bhi De', src: 'https://aac.saavncdn.com/166/21bbc6b37315b55afde4a9fe395524e3_160.mp4' },
        { title: 'Dard Dilo Ke', src: 'https://aac.saavncdn.com/066/a476e4c0a1103f1db699167732b6fa00_160.mp4' },
        { title: 'Kya Mujhe Pyaar Hai', src: 'https://aac.saavncdn.com/713/69dfc363b25f5c42a2e9fb5da6ba0b77_160.mp4' },
        { title: 'Meri Aashiqui ', src: 'https://aac.saavncdn.com/430/9a8b1946185b13024db89896b39528e5_160.mp4' },
        { title: 'Humdard', src: 'https://aac.saavncdn.com/151/721480005dd141ab28912aa73691a96b_160.mp4' },
        { title: 'Har Kisi Ko Nahi Milta', src: 'https://aac.saavncdn.com/591/a02b15bb2727ed5f155588f3e4990b9e_160.mp4' },
        { title: 'Dil Tod Ke', src: 'https://aac.saavncdn.com/997/3cddb2052a60e07f92bea839c394d0f3_160.mp4' },
        { title: 'Pachtaoge', src: 'https://aac.saavncdn.com/264/f966d8143f20aeae4fc17e3bf8c29be4_160.mp4' },
        { title: 'Ranjha', src: 'https://aac.saavncdn.com/627/2ed296d0187e8722c62846a295b3509d_160.mp4' },
        { title: 'O Bedardeya ', src: 'https://aac.saavncdn.com/903/a036e9cb0914abaf15b3c95855f9c5c4_160.mp4' },
        { title: 'Tadap Ke Is Dil Se', src: 'https://aac.saavncdn.com/963/794af566c2a9a420b762c92c27edf333_160.mp4' },
        { title: 'Tera Intezaar', src: 'https://aac.saavncdn.com/012/03272f2a0891ff13b6ded797ae648458_160.mp4' },
        { title: 'Sach Keh Raha Hai Deewana', src: 'https://aac.saavncdn.com/113/b54f16783c1ccad5a93fa3575396e08e_160.mp4' },
        { title: 'Bewafa Tera Masoom Chehra', src: 'https://aac.saavncdn.com/383/1fe48de4cca0e1a49a57bf84289ec859_160.mp4' },
        { title: 'Chhod Diya', src: 'https://aac.saavncdn.com/433/e47d0f7dba211121b0d9dab86b7b5147_160.mp4' },
        { title: 'Tune Jo Na Kaha', src: 'https://aac.saavncdn.com/135/f8ace16b4473b087a377f5db19085e14_160.mp4' },
        { title: 'Iqtidar', src: 'https://aac.saavncdn.com/100/716bb38627f1c2121d43e17fb7b92efa_160.mp4' },
        { title: 'Khair Mangda', src: 'https://aac.saavncdn.com/151/776e4e1c55c3aaa235b2c89a3643e502_160.mp4' },
        { title: 'Zakhm Dete Ho Kehte Ho Seete Raho', src: 'https://aac.saavncdn.com/193/ce3ea5b398af829119f2e208cc7356ce_160.mp4' },
        { title: 'Tu Jo Nahin', src: 'https://aac.saavncdn.com/832/248c04cd9d191b418353d7ac57eab335_160.mp4' },
        { title: 'Tujhse Naraz Nahi Zindagi', src: 'https://aac.saavncdn.com/453/c38f032d0a0b01ff8874b8e5e20f8a7a_sar_160.mp4' },
        { title: 'Kyun Main Jaagoon', src: 'https://aac.saavncdn.com/355/e96c2c52a87dfa414dbeef9ab021263a_160.mp4' },
        { title: 'Dillagi', src: 'https://aac.saavncdn.com/771/d7f931ae152c5653d91e1ce6e5b26d02_160.mp4' },
        { title: 'Jag Soona Soona Lage', src: 'https://aac.saavncdn.com/053/32962b7b7fa7b1c93a916ded0de6c529_160.mp4' },
        { title: 'Sau Dard', src: 'https://aac.saavncdn.com/289/5861f9870a6a37b17b307dc22d87300a_160.mp4' },
        { title: 'Aadat', src: 'https://aac.saavncdn.com/381/7aae1ca6f5d3a26a4e57b44320b77c90_160.mp4' },
        { title: 'Teri Khushboo', src: 'https://aac.saavncdn.com/931/0390fed32dd44520c9432b596079ebba_160.mp4' },
        { title: 'Chale Aana', src: 'https://aac.saavncdn.com/777/be5ad77101034eb01f874e7cf9a5a825_160.mp4' },
        { title: 'Naina', src: 'https://aac.saavncdn.com/480/8e331fbcb8dd8b43f5f8918b1def2cca_160.mp4' },
        { title: 'Phir Mulaaqat', src: 'https://aac.saavncdn.com/609/f6a54dbda3ac1143d8f2c60ce706fd24_160.mp4' },
        { title: 'Mushkil', src: 'https://aac.saavncdn.com/291/3694cce6019ec2b0326acf8ee11cd086_160.mp4' },
        { title: 'Dil De Diya', src: 'https://aac.saavncdn.com/712/9716d3c2521967b700c57741dec383c7_160.mp4' },
        { title: 'Khair Mangda', src: 'https://aac.saavncdn.com/339/fdd6cda7f95be46123e73e2ba5384ddc_160.mp4' }
    ],
    'romantic-songs': [
        { title: 'Raataan Lambiyan', src: 'https://aac.saavncdn.com/238/35726d4394604604e961bf5b846870d0_160.mp4' },
        { title: 'Apna Bana le', src: 'https://aac.saavncdn.com/815/483a6e118e8108cbb3e5cd8701674f32_160.mp4' },
        { title: 'Agar Tum Saath Ho', src: 'https://aac.saavncdn.com/994/2e6b47719cea3e7c9f971a3f1ddc9b0a_160.mp4' },
        { title: 'Tera Chehra-Jaan Meri', src: 'https://aac.saavncdn.com/307/94cd12d643bbba5cc3c4e95f4e7c72d7_160.mp4' },
        { title: 'Ishq Bulaava', src: 'https://aac.saavncdn.com/479/86e87e45f357f24714ccfe4d8f4500ce_160.mp4' },
        { title: 'Tere Naina', src: 'https://aac.saavncdn.com/825/fa46506d7806b24fdbb3155837292e0a_160.mp4' },
        { title: 'Shukran Allah', src: 'https://aac.saavncdn.com/751/0144e8c7cb3d3d7b8c734eb11db4496d_160.mp4' },
        { title: 'Bahara', src: 'https://aac.saavncdn.com/200/c24b119a666c231737d67106e1881753_160.mp4' },
        { title: 'Sanam Teri Kasam', src: 'https://aac.saavncdn.com/820/faf4da75fb159d2d21630e8e91de2586_160.mp4' },
        { title: 'Gerua', src: 'https://aac.saavncdn.com/297/dad9acba2583499814db9224aabb9105_160.mp4' },
        { title: 'Hosanna', src: 'https://aac.saavncdn.com/472/187104ba2d1b4f93ffcfa871883fb155_160.mp4' },
        { title: 'Suraj Hua Maddham', src: 'https://aac.saavncdn.com/778/c9c52c1295f9053c008f2d49b0339a88_160.mp4' },
        { title: 'Ishq Di Baajiyaan', src: 'https://aac.saavncdn.com/193/e46c53330475f09cb10b80c6a98ce998_160.mp4' },
        { title: 'Soniyo', src: 'https://aac.saavncdn.com/542/34e05537cc5017bfd6fdba3c6cfedf2d_160.mp4' },
        { title: 'Tumhi Dekho Naa', src: 'https://aac.saavncdn.com/089/74f3d9e55ed7b858d32eb196724dd4ab_160.mp4' },
        { title: 'Alvida', src: 'https://aac.saavncdn.com/457/3bd59217bf4083efc5cf93cdd34cbe05_160.mp4' },
        { title: 'Aa Leke Chalu Tujhko', src: 'https://aac.saavncdn.com/509/4f9565e15ef7edc9fd8acb4b0fc8bb25_160.mp4' },
        { title: 'Kuch To Hua Hai', src: 'https://aac.saavncdn.com/587/67e68b3593d8c8fbd81279540772b313_160.mp4' },
        { title: 'Mitwa', src: 'https://aac.saavncdn.com/089/02338877de7abe1e170818893e2c992a_160.mp4' },
        { title: 'Taaron Ko Mohabbat Amber Se', src: 'https://aac.saavncdn.com/285/ab3cfc670e6305ac522dbb30800b95af_160.mp4' },
        { title: 'Zehnaseeb', src: 'https://aac.saavncdn.com/936/398263f66281ab6f93a30201436704b5_160.mp4' },
        { title: 'Jab Se Tere Naina', src: 'https://aac.saavncdn.com/532/7d3c501aa5d15e83c60aae7eec06940e_160.mp4' },
        { title: 'Janam Janam', src: 'https://aac.saavncdn.com/735/5192a76ec11e04c071253fa80e83de4b_160.mp4' },
        { title: 'Bheegi Si Bhaagi Si', src: 'https://aac.saavncdn.com/403/64c068bd8bcf21dc29a0e2a165e4b554_160.mp4' },
        { title: 'Teri Jhuki Nazar', src: 'https://aac.saavncdn.com/157/978304bf20e8fc3b356f65aa4c8ba0f9_160.mp4' },
        { title: 'Tum Mile', src: 'https://aac.saavncdn.com/316/658fd36a66f95f13227a04dfa848c9b9_160.mp4' },
        { title: 'Ishq Wala Love', src: 'https://aac.saavncdn.com/017/e24d0b41191c3f27f23d79aa481e563c_160.mp4' },
        { title: 'Enna Sona', src: 'https://aac.saavncdn.com/835/3bb5690b365de4a583ed5a98632cc8c4_160.mp4' },
        { title: 'Tujh Mein Rab Dikhta Hai', src: 'https://aac.saavncdn.com/344/e582a289371227e32c22d2cc32612dcd_160.mp4' },
        { title: 'Doobey', src: 'https://aac.saavncdn.com/084/bc632a02bcd18c711102ab37f2de9c02_160.mp4' },
        { title: 'Samjhwan', src: 'https://aac.saavncdn.com/540/f807aad8e5c60a87334231f72267c725_160.mp4' },
        { title: 'Saibo', src: 'https://aac.saavncdn.com/614/5a77c4debe0f9fc8914bca133547aaba_160.mp4' },
        { title: 'Phir Mulaaqat', src: 'https://aac.saavncdn.com/609/f6a54dbda3ac1143d8f2c60ce706fd24_160.mp4' },
        { title: 'Zara Sa', src: 'https://aac.saavncdn.com/801/62e0268b27130432c3baee75bd7009fe_160.mp4' },
        { title: 'Pal Pal Dil Ke Paas', src: 'https://aac.saavncdn.com/328/6ff61e5c0e55485a5fe61f1a79efe944_160.mp4' },
        { title: 'Ranjha', src: 'https://aac.saavncdn.com/436/51981bd10557c83f9cf06dc4a7aa9666_160.mp4' },
        { title: 'Raataan Lambiyan', src: 'https://aac.saavncdn.com/132/a60ef7e2545094abc00433bda99f78ba_160.mp4' },
        { title: 'Hua Hain Aaj Pehli Baar', src: 'https://aac.saavncdn.com/829/2b61f8b4be3166b8d7b9a135a6d29f87_160.mp4' },
        { title: 'Bol Do Na Zara', src: 'https://aac.saavncdn.com/633/2fddfdf78b3c810d561b594d15a9456b_160.mp4' },
        { title: 'Wajah Tum Ho', src: 'https://aac.saavncdn.com/597/2005650c4362a6f26ae03126bc4d5cc3_160.mp4' },
        { title: 'Mujhko Barsaat Bana Lo', src: 'https://aac.saavncdn.com/432/b5f3c6292c24eb6f3aee4a54ff46f2c4_160.mp4' },
        { title: 'Barsaat  Badass Ravi Kumar', src: 'https://aac.saavncdn.com/882/749c482bc7584bc9a2bab6f5e2ed156a_160.mp4' }
    ],
    'party-songs': [
        { title: 'Abhi toh party shuru hui hai', src: 'https://aac.saavncdn.com/199/de2b23423840c1a061eaa9109de8982f_160.mp4' },
        { title: 'Saree Ke Fall Sa', src: 'https://aac.saavncdn.com/420/7c5578fc89112c8e857b7bf3a74e67db_160.mp4' },
        { title: 'DILBAR', src: 'https://aac.saavncdn.com/333/35b50861b2ab58628f3dea16d87cd546_160.mp4' },
        { title: 'Nagada Nagada', src: 'https://aac.saavncdn.com/223/7840ed76b16a665a1ef70c20c0153c78_160.mp4' },
        { title: 'Payar Ki Pungi Baja kar', src: 'https://aac.saavncdn.com/603/f26cf40cb16400e5e92c1cee45c24099_160.mp4' },
        { title: 'Mauja Hi Mouja', src: 'https://aac.saavncdn.com/223/23e2458ea15711517d9a4e458b96f76c_160.mp4' },
        { title: 'Chammak Challo', src: 'https://aac.saavncdn.com/026/4525eb9287203ed2f7d2abab5eff46bc_160.mp4' },
        { title: 'Dhadhang Dhang', src: 'https://aac.saavncdn.com/781/e96633c24f4687a58a6df2ac00641182_160.mp4' },
        { title: 'Bhool Bhulaiyaa', src: 'https://aac.saavncdn.com/056/f0d597264cefb5b55f69682ae40275a9_160.mp4' },
        { title: 'Paani Paani', src: 'https://aac.saavncdn.com/939/d98c15807ade93336347506235540752_sar_160.mp4' },
        { title: 'Manali Trance', src: 'https://aac.saavncdn.com/995/f8149ea2cab8912432bac194c07b7149_160.mp4' },
        { title: 'Nachho Naachoo', src: 'https://aac.saavncdn.com/585/c344c2e1e94446b51cf3d70ac18473e1_160.mp4' },
        { title: 'Subha Hone Na De', src: 'https://aac.saavncdn.com/743/75c6adf15c7ce788993785a9c2becef1_160.mp4' },
        { title: 'Aapka Kya Hoga', src: 'https://aac.saavncdn.com/921/9644519a8165979460c261c1f3867258_160.mp4' },
        { title: 'Yaad', src: 'https://aac.saavncdn.com/517/56650c33f581d17e313109ceb65d7aa1_160.mp4' },
        { title: 'Naach Meri Rani', src: 'https://aac.saavncdn.com/248/e60a214fe3385eac95ef3d8fb09bb140_160.mp4' },
        { title: 'Naagin', src: 'https://aac.saavncdn.com/678/2f934a93b6fa0fd10e5992753fb7aea6_160.mp4' },
        { title: 'Naah', src: 'https://aac.saavncdn.com/634/f15d3265277b4a1614cc8f796a24eae8_160.mp4' },
        { title: 'Laila Main Laila Remix', src: 'https://aac.saavncdn.com/688/1901e99ac89f974b46636cf70427abcf_160.mp4' },
        { title: 'Bom Diggy Diggy', src: 'https://aac.saavncdn.com/862/b9e76b6ab252caa6f9d2b7d452e65c60_160.mp4' },
        { title: 'Akh Lad Jaave', src: 'https://aac.saavncdn.com/862/8df2c7c8eb0764ec6db8150cf9e0f10e_160.mp4' },
        { title: 'Milegi Milegi', src: 'https://aac.saavncdn.com/862/6e78fc5f0942acb9c45e19c519ddd125_160.mp4' },
        { title: 'Genda Phool', src: 'https://aac.saavncdn.com/991/8efb3ed04260fdd52e5b42b06593ffe4_160.mp4' },
        { title: 'Jhakaas Remakes', src: 'https://aac.saavncdn.com/844/b5f6b671ff7b146200656a2f97010885_160.mp4' },
        { title: 'Aankh Marey', src: 'https://aac.saavncdn.com/453/2d344918899a1606ef658be8189daaeb_160.mp4' },
        { title: 'Kar Gayi Chull', src: 'https://aac.saavncdn.com/978/e7a6e97299ca851067e09e31fec18e6f_160.mp4' },
        { title: 'Lungi Dance', src: 'https://aac.saavncdn.com/148/8f5228e9397638aff47ad095d46e59bc_160.mp4' },
        { title: 'Swag Se Swagat', src: 'https://aac.saavncdn.com/351/34d43b13709618c3f25975e5b4dafc1a_160.mp4' },
        { title: 'Dilli Waali Girlfriend', src: 'https://aac.saavncdn.com/440/86f7b25631b3c24cdd54ca82b62d2523_160.mp4' },
        { title: 'Garm', src: 'https://aac.saavncdn.com/597/fdc90a4abac390bd56a5509f3a2fb70e_160.mp4' },
        { title: 'Naina', src: 'https://aac.saavncdn.com/303/0e490de3b2791b9552192c89d2059255_160.mp4' },
        { title: 'Mast Malang Jhoom', src: 'https://aac.saavncdn.com/864/7b235d9046aab287e3107c2763f7de21_160.mp4' },
        { title: 'Joota Japani', src: 'https://aac.saavncdn.com/129/7a85dbcffbf0f174a44ceeaf1647fe91_160.mp4' },
        { title: 'Aayi Nai', src: 'https://aac.saavncdn.com/373/9a3ad2173b2e80bc6f9655d1da7c8f27_160.mp4' },
        { title: 'Tauba Tauba', src: 'https://aac.saavncdn.com/992/171edf6c7aeb1dcdb66c2abfacd99d61_160.mp4' },
        { title: 'Morni', src: 'https://aac.saavncdn.com/798/c25a5aedb510b60de648b41457443586_160.mp4' },
        { title: 'Tere Ishq Mein Naachenge', src: 'https://aac.saavncdn.com/317/4e20566a68f7fa97c733077361e5fca7_160.mp4' }
    ],
    '90s song': [
        { title: 'Mohabbat Dil Ka Sakoon', src: 'https://aac.saavncdn.com/541/7134d6ad8fc09e36f8ff5944e3fd8fd7_160.mp4' },
        { title: 'Main Agar Saamne', src: 'https://aac.saavncdn.com/998/719b9d1bb5019b4ee110ddc2b0725e59_160.mp4' },
        { title: 'Meri Mehbooba', src: 'https://aac.saavncdn.com/386/20a0ec1cf6bbe2a95743eb07b86c6367_160.mp4' },
        { title: 'Aksar Is Duniya Mein', src: 'https://aac.saavncdn.com/454/c0676c80c4754fd7a83b119209b1ccbb_160.mp4' },
        { title: 'Jeeta Tha Jiske Liye', src: 'https://aac.saavncdn.com/840/bd48146a66a03ba0954960571376aafa_160.mp4' },
        { title: 'Dil Ke Badle Sanam', src: 'https://aac.saavncdn.com/522/2636852f19f658db64a549b9832845f0_160.mp4' },
        { title: 'Bole Chudiyan', src: 'https://aac.saavncdn.com/778/899d95d44fe4a91db0100fb23d24257f_160.mp4' },
        { title: 'Teri Chunnariya', src: 'https://aac.saavncdn.com/434/5ce9275a1b5460952bdc8a0cfc52749d_160.mp4' },
        { title: 'Mujhse Mohabbat Ka', src: 'https://aac.saavncdn.com/080/140101f311da69efe42bfa7940f93058_160.mp4' },
        { title: 'Tere Ishq Mein Naachenge', src: 'https://aac.saavncdn.com/629/a91b2458b880c59154151bc696e268b4_160.mp4' },
        { title: 'Oye Raju', src: 'https://aac.saavncdn.com/915/e1979402eccea4e1e76042e94a3f7e29_160.mp4' },
        { title: 'Ab tere dil mein hum aa gaye', src: 'https://aac.saavncdn.com/637/a1b0b7b5cd6a484b43a4d076faae2d81_sar_160.mp4' },
        { title: 'Jhanjharia Uski Chhanak Gayi', src: 'https://aac.saavncdn.com/516/a273d1ab171ed2b9aca0d98325e14ca8_160.mp4' },
        { title: 'Dil Tera Aashiq', src: 'https://aac.saavncdn.com/596/4ff2d92d00498e9d1b20c8fdba741b1f_160.mp4' },
        { title: 'Barsaat Ke Mausam', src: 'https://aac.saavncdn.com/769/d8cbcb023a70c68172858c7117f85a5b_160.mp4' },
        { title: 'Aaj Phir Jeene Ki Tamanna Hai', src: 'https://aac.saavncdn.com/870/01035f620a3eadf8d24ebe15bd53a4a1_160.mp4' },
        { title: 'Ek Hasina Thi Ek Diwana Tha', src: 'https://aac.saavncdn.com/197/583c25fcf7fd79fb030c4493885fc733_160.mp4' },
        { title: 'Jawani Jan-E-Man', src: 'https://aac.saavncdn.com/243/89fc48cd8b40aa5b152cd6ed1b0fb9ad_sar_160.mp4' },
        { title: 'Hai Rama', src: 'https://aac.saavncdn.com/461/91059bbd5473711ff08d59c1c125aeb9_160.mp4' },
        { title: 'Saiyyan Dil Mein Aana Re |', src: 'https://aac.saavncdn.com/110/d839af4ce945be80793cfcd0d62fc670_sar_160.mp4' },
        { title: 'Chand Se Parda Kijiye', src: 'https://aac.saavncdn.com/416/400150427d8e792c9bcdd4f0ab8e8796_160.mp4' },
        { title: 'Dil Jaane Jigar Tujh Pe', src: 'https://aac.saavncdn.com/917/3a69d7b273de39875ee10ee70bf95b67_160.mp4' },
        { title: 'Dil Hai Ki Manta Nahin', src: 'https://aac.saavncdn.com/880/46d60a2a6d51fe2f331633fcb7ea23bf_160.mp4' },
        { title: 'Meri Tarah Tum Bhi', src: 'https://aac.saavncdn.com/592/0513ed119692c09295ebcc6834569c57_160.mp4' },
        { title: 'Dheere Dheere Se Meri', src: 'https://aac.saavncdn.com/088/4f7393c087c15f563b88632dae29bb0c_160.mp4' },
        { title: 'Tumsa Koi Pyaara', src: 'https://aac.saavncdn.com/462/40f7d9ccf1749f07b6a723f96730ac78_160.mp4' },
        { title: 'Tu Pyar Hai Kisi Aur Ka', src: 'https://aac.saavncdn.com/880/524820605c9ae89eea351a21e51587d2_160.mp4' },
        { title: 'Raah Mein Unse Mulaqat', src: 'https://aac.saavncdn.com/560/4275f1c98e52bf6b6492a0aad972f05a_160.mp4' },
        { title: 'Mera Dil Bhi Kitna Pagal Hai', src: 'https://aac.saavncdn.com/461/e5ec72fde6980ef6fc434aae3c02fe3d_160.mp4' },
        { title: 'Tumhein Dekhen Meri Aankhen', src: 'https://aac.saavncdn.com/056/3624f22e2de0225d81f77acd35f328b6_160.mp4' },
        { title: 'Tumhe Apna Banane Ki', src: 'https://aac.saavncdn.com/020/da0d5fcdf8aa2ce391e63327ebba1c00_160.mp4' },
        { title: 'Dil Pardesi Ho Gaya', src: 'https://aac.saavncdn.com/301/959d5cfd0b8453df26f5fb9e981f2729_160.mp4' },
        { title: 'Hum Unse Mohabbat Karke', src: 'https://aac.saavncdn.com/195/60ee06c3593541b74a9843c4f015ee16_160.mp4' },
        { title: 'Do Dil Mil Rahe Hai', src: 'https://aac.saavncdn.com/386/ea767b2d7db5bfbc2bea6ff77fdc700f_160.mp4' },
        { title: 'Main Duniya Bhula Doonga', src: 'https://aac.saavncdn.com/088/57c96acad2cbd60674b854f8e68734d2_160.mp4' },
        { title: 'Dil Ka Rishta', src: 'https://aac.saavncdn.com/589/63769f11367214303658b0a9bb6a7277_160.mp4' },
        { title: 'Humko Srif Tumse Pyaar Hai', src: 'https://aac.saavncdn.com/328/895934b7d7f4f36b65548709c3cd2821_160.mp4' },
        { title: 'Kahin Mujhe Pyar Hua Toh Nahin', src: 'https://aac.saavncdn.com/056/e3b1a2eda23601de337c2b1aee2e1aa2_160.mp4' },
        { title: 'Is Tarah Ashiqui Ka', src: 'https://aac.saavncdn.com/458/c488424c5528d08ba50576843c95c404_160.mp4' },
        { title: 'Phoolon Sa Chehra Tera', src: 'https://aac.saavncdn.com/964/9be2686dbf0c31f867cd3ebd56614a6b_160.mp4' },
        { title: 'Pyar Dilon Ka Mela Hai', src: 'https://aac.saavncdn.com/664/74bb181c2c78a0c2f4efa7648d0d101a_160.mp4' },
        { title: 'Dil Kahte Hai Cholo Unse', src: 'https://aac.saavncdn.com/439/3b36d2ecd957b9aaacf5fa698be43efc_160.mp4' },
        { title: 'Aaj Pehli Baar Dil Ki Baat', src: 'https://aac.saavncdn.com/469/3d3cfb26c73d364add1ffb8e4b9acaf4_160.mp4' },
        { title: 'Kash Tum Mujhse Ek Baar', src: 'https://aac.saavncdn.com/330/7ddfe597a43b27bfea463500a4e37211_160.mp4' },
        { title: 'Ishq Mein Ek Pal', src: 'https://aac.saavncdn.com/328/20c6962437710e7cf74d0157029ccfd8_160.mp4' },
        { title: 'Chaaya Hai Jo Dil Pe', src: 'https://aac.saavncdn.com/399/4dc67fb2b8512d5b6542dce7a5c41957_160.mp4' },
        { title: 'Aapke Pyaar Mein Hum', src: 'https://aac.saavncdn.com/998/3e82c4dec0eaa187a9b373b325e39d39_160.mp4' }
    ],
    'stotram': [
        { title: 'Shree Hari Stotram', src: 'https://aac.saavncdn.com/739/7465b5dbddd658b16d548ef1400b4823_160.mp4' },
        { title: 'Ashutosh Shashank Shekhar', src: 'https://aac.saavncdn.com/254/9b9d1cb5a1f9c0cec3eb68682f0c641d_160.mp4' },
        { title: 'Namami Shamishan', src: 'https://aac.saavncdn.com/045/b51ed9a6ab455f2d7ce28cdfa6ac7e4d_160.mp4' },
        { title: 'Nirvana Shatakam', src: 'https://aac.saavncdn.com/871/7a6106d985b5839acae19f7641923689_160.mp4' },
        { title: 'Shiv Panchakshar Stotra', src: 'https://aac.saavncdn.com/065/84f50899adceb14d074cfe5f5ee90f18_160.mp4' },
        { title: 'Mahamrityunjay Mantra', src: 'https://aac.saavncdn.com/521/1f4fe8863894de18a01e7b33c8befe7a_160.mp4' },
        { title: 'Shiv Tandav Stotram', src: 'https://aac.saavncdn.com/641/5c79c9aa37bb9f6fbec1672cf7fb4e52_160.mp4' }
    ]
};

const backgroundImages = {
    'sad-songs': 's.jpg',
    'romantic-songs': 'r.jpg',
    'party-songs': 'p.jpg',
    '90s song': 'old.png',
    'stotram': 'swastik.jpg'
};

function changeBackground(category) {
    playlistPage.style.backgroundImage = `url('${backgroundImages[category]}')`;
}

function preloadImages() {
    Object.values(backgroundImages).forEach((image) => {
        const img = new Image();
        img.src = image;
    });
}

function filterSongs(query) {
    const allSongs = Object.values(categories).flat();
    return allSongs.filter(song => song.title.toLowerCase().includes(query.toLowerCase()));
}

function displayFilteredSongs(songs) {
    playlistCategory.innerHTML = '';
    songs.forEach((song, index) => {
        const playlistSong = document.createElement('div');
        playlistSong.classList.add('playlist-song');
        playlistSong.innerHTML = `
            <p>${song.title}</p>
            <button class="btn btn-success" data-src="${song.src}" data-title="${song.title}" data-index="${index}">Play</button>
        `;
        playlistCategory.appendChild(playlistSong);
    });

    const playButtons = document.querySelectorAll('.playlist-song button');
    playButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const src = button.getAttribute('data-src');
            const title = button.getAttribute('data-title');
            const index = button.getAttribute('data-index');
            playSong(src, title, button, index);
        });
    });
}

playlistSearch.addEventListener('input', function() {
    const query = playlistSearch.value.trim();
    if (query === '') {
        populatePlaylist('sad-songs');
    } else {
        const filteredSongs = filterSongs(query);
        displayFilteredSongs(filteredSongs);
    }
});

$(document).ready(function() {
    preloadImages();
    populatePlaylist('sad-songs');
    $('a[data-category="sad-songs"]').addClass('active');

    $('a.nav-link').click(function(e) {
        e.preventDefault();
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
        const category = $(this).data('category');
        populatePlaylist(category);
        changeBackground(category);
        
        // Auto-collapse navbar after selection
        if ($('#navbarSupportedContent').hasClass('show')) {
            $('#navbarSupportedContent').collapse('hide');
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.getElementById('navbar-brand').addEventListener('click', function(e) {
        e.preventDefault();
        showHomePage();
    });
});

let currentSongIndex = 0;
let currentPlaylist = [];

function populatePlaylist(category) {
    playlistCategory.innerHTML = '';
    playlistTitle.textContent = category.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    currentPlaylist = categories[category];
    currentPlaylist.forEach((song, index) => {
        const playlistSong = document.createElement('div');
        playlistSong.classList.add('playlist-song');
        playlistSong.innerHTML = `
            <p>${song.title}</p>
            <button class="btn btn-success" data-src="${song.src}" data-title="${song.title}" data-index="${index}">Play</button>
        `;
        playlistCategory.appendChild(playlistSong);
    });

    const playButtons = document.querySelectorAll('.playlist-song button');
    playButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const src = button.getAttribute('data-src');
            const title = button.getAttribute('data-title');
            const index = button.getAttribute('data-index');
            playSong(src, title, button, index);
        });
    });
}

function playSong(src, title, button, index) {
    currentSongIndex = parseInt(index);
    if (audioPlayer.src !== src) {
        audioPlayer.src = src;
        audioPlayer.play();
        songTitle.textContent = title;
        resetPlayButtons();
        button.textContent = 'Pause';
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');
    } else if (audioPlayer.paused) {
        audioPlayer.play();
        button.textContent = 'Pause';
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');
    } else {
        audioPlayer.pause();
        button.textContent = 'Play';
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
    }

    audioPlayer.addEventListener('ended', () => {
        currentSongIndex++;
        if (currentSongIndex < currentPlaylist.length) {
            const nextSong = currentPlaylist[currentSongIndex];
            audioPlayer.src = nextSong.src;
            audioPlayer.play();
            songTitle.textContent = nextSong.title;
            resetPlayButtons();
            const nextButton = document.querySelector(`.playlist-song button[data-index="${currentSongIndex}"]`);
            if (nextButton) {
                nextButton.textContent = 'Pause';
                nextButton.classList.remove('btn-success');
                nextButton.classList.add('btn-danger');
            }
        } else {
            currentSongIndex = 0;
            const firstSong = currentPlaylist[currentSongIndex];
            audioPlayer.src = firstSong.src;
            audioPlayer.play();
            songTitle.textContent = firstSong.title;
            resetPlayButtons();
            const firstButton = document.querySelector(`.playlist-song button[data-index="${currentSongIndex}"]`);
            if (firstButton) {
                firstButton.textContent = 'Pause';
                firstButton.classList.remove('btn-success');
                firstButton.classList.add('btn-danger');
            }
        }
    });

    audioPlayer.addEventListener('error', () => {
        alert('Error loading the audio file. Please try another song.');
        button.textContent = 'Play';
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
    });
}

function resetPlayButtons() {
    const buttons = document.querySelectorAll('.playlist-song button');
    buttons.forEach((btn) => {
        btn.textContent = 'Play';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-success');
    });
}
