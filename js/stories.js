const STORIES = [
  {
    id: "tho-va-rua",
    title: { vi: "Thỏ và Rùa", en: "The Tortoise and the Hare" },
    moral: { vi: "Chậm mà chắc. Đừng kiêu ngạo, đừng xem thường người khác.", en: "Slow and steady wins the race. Pride goes before a fall." },
    scene: "hare",
    color: "leaf",
    excerpt: {
      vi: "Một con thỏ kiêu ngạo thách đấu với chú rùa chậm chạp. Ai sẽ về đích trước?",
      en: "A boastful hare challenges a slow tortoise to a race. Who will cross the finish line first?"
    },
    paragraphs: [
      { vi: "Ngày xửa ngày xưa, trong một khu rừng xanh, có một con thỏ luôn tự hào vì mình chạy nhanh nhất.", en: "Once upon a time, in a green forest, there lived a hare who was proud of being the fastest runner of all." },
      { vi: "Một buổi sáng nọ, thỏ gặp rùa đang chậm rãi bò trên đường và liền cười nhạo.", en: "One morning, the hare met the tortoise crawling slowly along the road and burst out laughing." },
      { vi: "\"Rùa ơi, sao mày chậm thế? Tao cá với mày là tao chạy nhanh gấp trăm lần mày!\"", en: "\"Hey, tortoise, why are you so slow? I bet I can run a hundred times faster than you!\"" },
      { vi: "Rùa mỉm cười hiền lành: \"Được thôi, vậy chúng ta hãy thi chạy xem ai đến đích trước.\"", en: "The tortoise smiled gently: \"Alright then, let us race and see who reaches the finish line first.\"" },
      { vi: "Bác cáo già làm trọng tài. Tiếng còi vang lên, thỏ phóng vút đi như một mũi tên.", en: "Old Mr. Fox was the referee. The whistle blew, and the hare dashed off like an arrow." },
      { vi: "Chạy được một đoạn, thỏ thấy mình bỏ xa rùa quá, liền ngả lưng dưới gốc cây ngủ một giấc.", en: "After a while, the hare saw he was far ahead, so he lay down under a tree and took a nap." },
      { vi: "Rùa không hề dừng lại. Từng bước, từng bước, rùa bò mãi, bò mãi không ngừng nghỉ.", en: "The tortoise never stopped. Step by step, he crawled on and on without resting." },
      { vi: "Khi thỏ tỉnh giấc, trời đã xế chiều. Thỏ giật mình phóng hết tốc lực về đích.", en: "When the hare woke up, the afternoon was almost over. Startled, he ran with all his might toward the finish." },
      { vi: "Nhưng đã quá muộn. Rùa đã về đích trước, mỉm cười hiền hậu chờ thỏ.", en: "But it was too late. The tortoise had already crossed the finish line, waiting with a gentle smile." }
    ]
  },
  {
    id: "cau-be-chan-cuu",
    title: { vi: "Cậu Bé Chăn Cừu", en: "The Boy Who Cried Wolf" },
    moral: { vi: "Nói dối nhiều lần, đến khi nói thật cũng chẳng còn ai tin.", en: "Nobody believes a liar, even when he tells the truth." },
    scene: "wolf",
    color: "son",
    excerpt: {
      vi: "Một cậu bé chăn cừu hay trêu đùa dân làng bằng tiếng kêu cứu giả. Cho đến một ngày sói thật xuất hiện.",
      en: "A shepherd boy loves to trick the villagers with a fake cry for help — until a real wolf shows up one day."
    },
    paragraphs: [
      { vi: "Ngày xưa, ở một ngôi làng nọ, có một cậu bé chăn cừu cho cả làng.", en: "Long ago, in a certain village, there lived a boy who shepherded the flock for the whole town." },
      { vi: "Mỗi ngày, cậu dẫn đàn cừu lên đồi và ngồi trông chúng gặm cỏ. Buồn chán quá, cậu nghĩ ra một trò tinh nghịch.", en: "Every day, he led the sheep up the hill and watched them graze. Feeling bored, he thought of a mischievous trick." },
      { vi: "Cậu hét toáng lên: \"Sói! Sói! Có sói bắt cừu kìa!\"", en: "He shouted at the top of his lungs: \"Wolf! Wolf! A wolf is eating the sheep!\"" },
      { vi: "Dân làng vội vã cầm gậy chạy lên đồi. Nhưng chẳng có con sói nào cả. Cậu bé cười khoái chí.", en: "The villagers grabbed their sticks and rushed up the hill. But there was no wolf at all. The boy giggled with glee." },
      { vi: "Hôm sau, cậu lại chơi trò đó lần nữa. Dân làng lại chạy lên, lại chẳng thấy gì, và giận dữ bỏ về.", en: "The next day, he played the same trick again. The villagers ran up, found nothing, and went back angry." },
      { vi: "Đến ngày thứ ba, một con sói thật sự xuất hiện, lẻn vào giữa đàn cừu.", en: "On the third day, a real wolf appeared and crept into the middle of the flock." },
      { vi: "Cậu bé hoảng hốt kêu cứu: \"Sói! Sói thật! Cứu tôi với!\"", en: "The boy cried out in panic: \"Wolf! A real wolf! Somebody help!\"" },
      { vi: "Nhưng lần này, dân làng chỉ lắc đầu: \"Thằng bé lại nói dối nữa rồi.\" Không một ai chạy lên đồi.", en: "But this time, the villagers just shook their heads: \"The boy is lying again.\" No one came running." },
      { vi: "Buổi tối hôm đó, cậu bé trở về với đôi mắt đỏ hoe. Đàn cừu đã bị sói tha đi mất.", en: "That evening, the boy came home with teary eyes. The wolf had carried the sheep away." }
    ]
  },
  {
    id: "kien-va-chau-chau",
    title: { vi: "Kiến và Châu Chấu", en: "The Ant and the Grasshopper" },
    moral: { vi: "Ai chuẩn bị cho ngày mai từ hôm nay, ngày mai sẽ không phải lo đói.", en: "Prepare today for tomorrow's needs." },
    scene: "ant",
    color: "ngh",
    excerpt: {
      vi: "Cả mùa hè, châu chấu chỉ ca hát vui chơi, còn kiến chăm chỉ tích trữ lương thực cho mùa đông.",
      en: "All summer long, the grasshopper sings and plays while the ant stores food for the winter."
    },
    paragraphs: [
      { vi: "Mùa hè đến, nắng vàng rực rỡ. Trên cánh đồng, đàn kiến cần mẫn tha từng hạt lúa về tổ.", en: "Summer arrived, bright and golden. Across the field, a troop of ants busily carried grains of wheat back to their nest." },
      { vi: "Châu chấu ngồi trên phiến lá, vừa gảy đàn vừa ngân nga: \"Kiến ơi, nghỉ ngơi chút đi! Mùa hè là để vui chơi mà!\"", en: "The grasshopper sat on a leaf, strumming his fiddle and singing: \"Ant, take a break! Summer is for playing!\"" },
      { vi: "Kiến lắc đầu: \"Không được đâu. Tôi phải tích trữ thức ăn cho mùa đông sắp tới.\"", en: "The ant shook her head: \"No, I can't. I must store food for the coming winter.\"" },
      { vi: "Châu chấu cười: \"Mùa đông còn xa lắm! Cứ tận hưởng hôm nay đã!\"", en: "The grasshopper laughed: \"Winter is far away! Enjoy today first!\"" },
      { vi: "Thế là suốt mùa hè, kiến miệt mài làm việc còn châu chấu chỉ biết ca hát.", en: "And so, all summer long, the ant worked tirelessly while the grasshopper did nothing but sing." },
      { vi: "Thu qua, đông đến. Gió lạnh thổi ào ào, tuyết phủ trắng cả cánh đồng.", en: "Autumn passed and winter came. Cold winds howled, and snow covered the whole field." },
      { vi: "Trong tổ ấm áp, kiến có đầy đủ lúa gạo để ăn qua mùa đông.", en: "In her warm nest, the ant had plenty of grain to eat through the winter." },
      { vi: "Còn châu chấu thì run rẩy, đói lả, gõ cửa xin kiến một chút thức ăn.", en: "The grasshopper, meanwhile, shivered and starved, knocking on the ant's door to beg for a little food." },
      { vi: "Kiến mở cửa, dịu dàng nói: \"Mùa hè tôi mời bạn làm việc cùng, bạn không nghe. Giờ thì hãy học bài học này nhé.\"", en: "The ant opened the door and said softly: \"Last summer I invited you to work with me, but you wouldn't listen. Now learn this lesson.\"" }
    ]
  },
  {
    id: "cao-va-chum-nho",
    title: { vi: "Cáo và Chùm Nho", en: "The Fox and the Grapes" },
    moral: { vi: "Chê bai những gì mình không đạt được chỉ là cách tự an ủi bản thân.", en: "It is easy to despise what you cannot have." },
    scene: "fox",
    color: "rose",
    excerpt: {
      vi: "Một con cáo đói nhìn thấy chùm nho chín mọng treo cao. Liệu nó có với tới được không?",
      en: "A hungry fox spots a bunch of ripe grapes hanging high above. Can he ever reach them?"
    },
    paragraphs: [
      { vi: "Một buổi chiều nọ, con cáo đói bụng đi lang thang trong vườn nho.", en: "One afternoon, a hungry fox wandered through a vineyard." },
      { vi: "Bỗng nó nhìn lên và thấy một chùm nho chín mọng, tím sẫm, treo lủng lẳng trên giàn cao.", en: "Suddenly he looked up and saw a bunch of plump, dark-purple grapes hanging from a high trellis." },
      { vi: "\"Chà, đúng thứ ta cần!\" Cáo lè lưỡi liếm mép, lùi lại vài bước rồi lao lên định nhảy tới.", en: "\"Ah, just what I need!\" The fox licked his lips, stepped back a few paces, and leaped toward them." },
      { vi: "Nhưng chùm nho treo quá cao. Cáo nhảy lần thứ hai, lần thứ ba, vẫn không chạm tới.", en: "But the grapes hung too high. He jumped a second time, then a third, and still could not reach them." },
      { vi: "Cáo nhảy mãi đến mệt nhoài, mồ hôi ròng ròng, nhưng chùm nho vẫn cứ lủng lẳng trên cao.", en: "He jumped until he was exhausted, sweat dripping down, yet the grapes still dangled far above." },
      { vi: "Cuối cùng, cáo thở hắt ra, vùng vằng bỏ đi và lẩm bẩm:", en: "At last, the fox sighed, turned away in a huff, and muttered:" },
      { vi: "\"Chùm nho gì mà chua lè! Chắc chắn chưa chín, có hái được cũng chẳng ai thèm ăn.\"", en: "\"Those grapes are surely sour! They can't be ripe — even if I got them, nobody would want to eat them.\"" },
      { vi: "Nhưng sự thật là chùm nho rất ngọt. Cáo chỉ không với tới được mà thôi.", en: "But the truth was, the grapes were perfectly sweet. The fox simply could not reach them." }
    ]
  },
  {
    id: "su-tu-va-chuot-nhat",
    title: { vi: "Sư Tử và Chuột Nhắt", en: "The Lion and the Mouse" },
    moral: { vi: "Đừng xem thường kẻ bé nhỏ. Một lòng tốt nhỏ có thể cứu được cả một người khổng lồ.", en: "Little friends may prove great friends. Kindness is never wasted." },
    scene: "lion",
    color: "sky",
    excerpt: {
      vi: "Một chú chuột nhắt vô tình đánh thức sư tử đang ngủ. Lòng khoan dung của sư tử rồi sẽ được đền đáp thế nào?",
      en: "A tiny mouse accidentally wakes a sleeping lion. How will the lion's mercy be repaid?"
    },
    paragraphs: [
      { vi: "Một buổi trưa nóng nực, sư tử nằm ngủ dưới bóng cây to trong rừng sâu.", en: "One hot noon, a lion lay sleeping in the shade of a big tree deep in the jungle." },
      { vi: "Một chú chuột nhắt chạy ngang qua, vô tình chạy thẳng lên người sư tử và làm ông tỉnh giấc.", en: "A little mouse ran by and accidentally scurried right across the lion's body, waking him up." },
      { vi: "Sư tử vươn chân to lớn, chụp lấy chuột nhắt, gầm lên: \"Mi dám làm loạn giấc ngủ của ta à?\"", en: "The lion stretched out his huge paw, grabbed the mouse, and roared: \"How dare you disturb my sleep?\"" },
      { vi: "Chuột nhắt run rẩy van xin: \"Ông ơi, xin tha cho tôi! Nếu ông thả tôi ra, một ngày nào đó tôi sẽ đền ơn ông.\"", en: "The mouse trembled and begged: \"Please spare me! If you let me go, one day I will repay your kindness.\"" },
      { vi: "Sư tử bật cười ha hả: \"Mi bé xíu thế kia mà đòi đền ơn ta?\" Nhưng ông thấy chuột đáng thương, bèn thả ra.", en: "The lion burst out laughing: \"You, so tiny, repay me?\" Still, he found the mouse pitiful and let him go." },
      { vi: "Ít lâu sau, sư tử bị mắc vào lưới của thợ săn. Ông gầm thét giãy giụa nhưng không sao thoát ra được.", en: "Some time later, the lion got caught in a hunter's net. He roared and struggled, but could not escape." },
      { vi: "Nghe tiếng gầm, chuột nhắt chạy tới. Nó cắn đứt từng sợi lưới, cắn mãi, cắn mãi.", en: "Hearing the roar, the little mouse came running. He gnawed through the ropes, one by one, again and again." },
      { vi: "Chẳng bao lâu, lưới rách toang. Sư tử thoát ra, sung sướng cảm ơn chú chuột bé nhỏ.", en: "Soon the net fell apart. The lion was free, and joyfully thanked the tiny mouse." },
      { vi: "\"Ta đã sai khi cười nhạo mi,\" sư tử nói. \"Kẻ bé nhỏ cũng có thể giúp được kẻ to lớn.\"", en: "\"I was wrong to laugh at you,\" said the lion. \"Even the smallest friend can help the greatest.\"" }
    ]
  },
  {
    id: "qua-va-binh-nuoc",
    title: { vi: "Con Quạ và Chiếc Bình Nước", en: "The Crow and the Pitcher" },
    moral: { vi: "Khó khăn không đáng sợ, chỉ cần ta chịu khó nghĩ và kiên trì.", en: "Where there is a will, there is a way." },
    scene: "crow",
    color: "sky",
    excerpt: {
      vi: "Một con quạ khát nước tìm thấy chiếc bình nhưng không với tới nước. Nó sẽ làm gì?",
      en: "A thirsty crow finds a pitcher but cannot reach the water. What will it do?"
    },
    paragraphs: [
      { vi: "Một ngày hè nóng nực, con quạ khát khô cổ bay khắp nơi tìm nước uống.", en: "On a scorching summer day, a thirsty crow flew everywhere searching for water." },
      { vi: "Cuối cùng, nó tìm thấy một chiếc bình nước đặt ở góc vườn.", en: "At last, it spotted a pitcher of water standing in the corner of a garden." },
      { vi: "Quạ mừng rỡ sà xuống, thò mỏ vào bình. Nhưng mỏ quạ quá ngắn, chẳng chạm tới nước.", en: "Overjoyed, the crow swooped down and dipped its beak in. But its beak was too short to reach the water." },
      { vi: "Nước trong bình lại quá ít, nằm tận đáy sâu.", en: "Besides, there was too little water, lying at the very bottom." },
      { vi: "Quạ suy nghĩ một lúc rồi nảy ra một ý hay. Nó nhặt từng viên sỏi bỏ vào bình.", en: "The crow thought for a while and had a bright idea. It picked up pebble after pebble and dropped them into the pitcher." },
      { vi: "Mỗi viên sỏi rơi xuống, nước lại dâng lên một chút.", en: "With every stone that fell, the water rose a little higher." },
      { vi: "Quạ kiên nhẫn tha sỏi suốt cả buổi chiều, không hề bỏ cuộc.", en: "Patiently, the crow carried stones all afternoon without giving up." },
      { vi: "Đến khi nước dâng lên tới miệng bình, quạ thò mỏ vào uống no nê.", en: "When the water finally reached the rim, the crow dipped its beak and drank to its heart's content." }
    ]
  },
  {
    id: "nong-dan-va-con-ran",
    title: { vi: "Người Nông Dân và Con Rắn", en: "The Farmer and the Snake" },
    moral: { vi: "Đừng đặt lòng tốt vào kẻ vô ơn, kẻ không bao giờ đổi thay bản tính.", en: "Kindness misplaced can harm the giver." },
    scene: "snakes",
    color: "leaf",
    excerpt: {
      vi: "Một bác nông dân cứu con rắn sắp chết cóng. Liệu lòng tốt của bác có được đền đáp?",
      en: "A farmer rescues a snake dying of cold. Will his kindness be repaid?"
    },
    paragraphs: [
      { vi: "Mùa đông năm ấy trời rét căm căm. Một bác nông dân đi qua cánh đồng bỗng thấy một con rắn nằm co ro, sắp chết cóng.", en: "One bitter winter, a farmer walked across his field and found a snake curled up, nearly frozen to death." },
      { vi: "Con rắn run rẩy nói: \"Bác ơi, xin hãy cứu tôi. Tôi sắp chết vì lạnh rồi.\"", en: "The trembling snake said: \"Kind sir, please save me. I am dying of cold.\"" },
      { vi: "Bác nông dân thương hại, bèn cúi xuống nhặt con rắn lên.", en: "Taking pity, the farmer bent down and picked up the snake." },
      { vi: "\"Tôi sẽ mang anh về nhà sưởi ấm bên bếp lửa.\"", en: "\"I will take you home to warm you by the fire.\"" },
      { vi: "Về đến nhà, bác đặt con rắn cạnh bếp lửa hồng. Hơi ấm lan dần, con rắn dần hồi tỉnh.", en: "At home, the farmer laid the snake beside the glowing fire. As warmth spread, the snake slowly revived." },
      { vi: "Nhưng vừa tỉnh lại, con rắn liền đòi cắn bác nông dân.", en: "But the moment it revived, the snake tried to bite the farmer." },
      { vi: "Bác nông dân giật mình: \"Tôi cứu anh, sao anh lại làm thế?\"", en: "Startled, the farmer cried: \"I saved you — why would you do this?\"" },
      { vi: "Con rắn lạnh lùng đáp: \"Bởi vì tôi là rắn. Bản tính của tôi là vậy.\"", en: "The snake replied coldly: \"Because I am a snake. That is my nature.\"" }
    ]
  },
  {
    id: "cho-va-mieng-thit",
    title: { vi: "Chú Chó và Miếng Thịt", en: "The Dog and His Reflection" },
    moral: { vi: "Tham lam sẽ làm ta mất cả những gì đang có.", en: "Greed loses what it already has." },
    scene: "dogbone",
    color: "ngh",
    excerpt: {
      vi: "Chú chó tha miếng thịt ngon qua cầu, nhìn xuống nước và thấy \"một con chó khác\" tha miếng thịt to hơn.",
      en: "A dog carrying a tasty bone crosses a bridge and sees \"another dog\" with a bigger bone in the water."
    },
    paragraphs: [
      { vi: "Một chú chó vừa đánh cắp được một miếng thịt ngon lành, hí hửng tha về nhà.", en: "A dog had just stolen a delicious piece of meat and trotted home proudly." },
      { vi: "Trên đường về, chú phải băng qua một chiếc cầu nhỏ bắc ngang dòng suối.", en: "On the way, he had to cross a small bridge over a stream." },
      { vi: "Nhìn xuống dòng nước trong veo, chú chó thấy bóng mình đang tha một miếng thịt to không kém.", en: "Peering into the clear water, the dog saw his reflection carrying a piece of meat just as big." },
      { vi: "\"Ơ kìa, miếng thịt của nó to hơn ta!\" Chó thèm thuồng nghĩ bụng.", en: "\"Look, its meat looks bigger than mine!\" the dog thought greedily." },
      { vi: "Nó quyết định cướp miếng thịt của \"con chó kia\" và sủa ầm ĩ xuống nước.", en: "He decided to snatch the other dog's meat and barked loudly at the water." },
      { vi: "\"Gâu! Gâu! Nhả miếng thịt ra cho ta!\"", en: "\"Woof! Woof! Drop that meat for me!\"" },
      { vi: "Vừa há miệng sủa, miếng thịt trên mồm chú liền rơi tõm xuống suối trôi đi mất.", en: "The instant he opened his mouth, the meat in his jaws fell with a splash and floated away." },
      { vi: "Chú chó ngớ người nhìn dòng nước. Chẳng có con chó nào cả, chỉ có bóng mình thôi.", en: "The dog stared blankly at the water. There was no other dog — only his own reflection." }
    ]
  },
  {
    id: "ga-trong-va-cao",
    title: { vi: "Gà Trống và Cáo", en: "The Rooster and the Fox" },
    moral: { vi: "Lời khen của kẻ xấu thường là cái bẫy. Hãy cảnh giác.", en: "Beware of flattery from the wicked." },
    scene: "rooster",
    color: "son",
    excerpt: {
      vi: "Con cáo ranh mãnh dùng lời khen để dụ gà trống. Liệu gà trống có mắc mưu?",
      en: "A sly fox uses flattery to lure a rooster. Will the rooster fall for it?"
    },
    paragraphs: [
      { vi: "Một buổi sáng, chú gà trống bay lên cành cây cao gáy vang.", en: "One morning, a rooster flew up to a high branch and crowed loudly." },
      { vi: "Một con cáo ranh mãnh đi ngang, thấy gà liền nghĩ ra mưu kế.", en: "A sly fox passing by saw the rooster and hatched a plan." },
      { vi: "\"Chào gà trống đẹp trai! Tiếng gáy của anh hay tuyệt vời! Chắc chắn anh là ca sĩ giỏi nhất khu rừng!\"", en: "\"Greetings, handsome rooster! Your crowing is wonderful! You must be the finest singer in the forest!\"" },
      { vi: "Gà trống nghe lời khen, khoan khoái rướn cổ lên gáy thật to.", en: "Flattered, the rooster stretched his neck and crowed with all his might." },
      { vi: "Cáo lại tiếp tục: \"Nghe nói loài gà các anh đều nhắm mắt hót rất hay. Anh thử nhắm mắt hót xem nào!\"", en: "The fox continued: \"They say roosters sing beautifully with their eyes closed. Try closing your eyes and singing!\"" },
      { vi: "Gà trống mắc mưu, nhắm nghiền mắt lại và cất tiếng gáy.", en: "Taken in by the trick, the rooster squeezed his eyes shut and crowed." },
      { vi: "Cáo lập tức nhảy vồ lên, chộp lấy gà trống bỏ chạy.", en: "Instantly the fox leaped up, snatched the rooster, and ran away." },
      { vi: "Dân làng nghe tiếng gà kêu cứu, liền đuổi theo. Cáo sợ hãi nhả gà ra, chạy thẳng vào rừng.", en: "Hearing the rooster's cries, the villagers gave chase. Frightened, the fox dropped the rooster and fled into the woods." }
    ]
  },
  {
    id: "hai-nguoi-ban-va-con-gau",
    title: { vi: "Hai Người Bạn và Con Gấu", en: "The Two Friends and the Bear" },
    moral: { vi: "Khó khăn hoạn nạn mới biết ai là bạn chân thành.", en: "A friend in need is a friend indeed." },
    scene: "bear",
    color: "rose",
    excerpt: {
      vi: "Hai người bạn gặp gấu trong rừng. Một người trèo cây bỏ chạy, người kia ở lại đối mặt.",
      en: "Two friends meet a bear in the woods. One climbs a tree to flee; the other must face it alone."
    },
    paragraphs: [
      { vi: "Hai người bạn thân cùng nhau đi qua một khu rừng rậm.", en: "Two close friends were walking through a dense forest together." },
      { vi: "Bỗng một con gấu to lớn từ bụi rậm lao ra.", en: "Suddenly, a huge bear burst out of the bushes." },
      { vi: "Một người nhanh chân trèo vọt lên cây, bỏ mặc người bạn ở lại.", en: "One man quickly scrambled up a tree, leaving his friend behind." },
      { vi: "Người còn lại không kịp trèo, đành nằm im xuống đất, nín thở giả vờ chết.", en: "The other had no time to climb, so he lay flat on the ground, holding his breath and pretending to be dead." },
      { vi: "Con gấu lại gần, ngửi ngửi quanh người anh rồi bỏ đi, vì gấu không bao giờ đụng đến người chết.", en: "The bear came close, sniffed around him, and walked away — for bears never touch the dead." },
      { vi: "Khi gấu đã đi xa, người bạn trên cây tụt xuống, hỏi: \"Gấu thì thầm gì với cậu thế?\"", en: "When the bear was far away, the friend climbed down and asked: \"What did the bear whisper to you?\"" },
      { vi: "\"Gấu bảo tớ: đừng bao giờ kết bạn với kẻ bỏ mặc bạn mình lúc nguy nan.\"", en: "\"The bear told me: never befriend someone who abandons you in danger.\"" },
      { vi: "Người kia nghe xong, cúi đầu xấu hổ không nói nên lời.", en: "Hearing this, the other man bowed his head in shame, speechless." }
    ]
  },
  {
    id: "cay-say-va-cay-soi",
    title: { vi: "Cây Sậy và Cây Sồi", en: "The Oak and the Reed" },
    moral: { vi: "Biết mềm dẻo, biết nhún nhường lúc cần thiết sẽ giúp ta vượt qua sóng gió.", en: "Flexibility can be stronger than rigidity." },
    scene: "oakreed",
    color: "leaf",
    excerpt: {
      vi: "Cây sồi to lớn chê cây sậy yếu ớt. Nhưng khi cơn bão ập đến, ai mới là kẻ sống sót?",
      en: "The mighty oak mocks the fragile reed. But when the storm comes, who survives?"
    },
    paragraphs: [
      { vi: "Bên bờ sông, một cây sồi to lớn đứng hiên ngang, còn những cây sậy mảnh khảnh mọc rạp bên dưới.", en: "By the riverbank, a mighty oak stood tall, while slender reeds grew low beneath it." },
      { vi: "Cây sồi tự hào nói: \"Các ngươi bé nhỏ yếu ớt thế kia, gió thổi một cái là gãy ngay!\"", en: "The oak boasted: \"You are so small and weak — one gust of wind will snap you!\"" },
      { vi: "Cây sậy khiêm nhường đáp: \"Đúng vậy, chúng tôi yếu thật. Nhưng chúng tôi biết cúi mình trước gió.\"", en: "The reed humbly replied: \"True, we are weak. But we know how to bow before the wind.\"" },
      { vi: "Đêm đó, một cơn bão lớn ập đến. Gió gào thét, mưa như trút nước.", en: "That night, a great storm struck. The wind howled and rain poured down." },
      { vi: "Cây sồi vươn cành chống chọi hết sức mình với cơn gió dữ.", en: "The oak stretched its branches and fought the fierce wind with all its strength." },
      { vi: "Còn cây sậy thì cong mình xuống, để gió lướt qua mà không gãy.", en: "The reeds, meanwhile, bent low, letting the wind sweep over them without breaking." },
      { vi: "Sáng hôm sau, cơn bão tan. Cây sậy vẫn đứng nguyên, rung rinh trong nắng.", en: "The next morning, the storm passed. The reeds stood intact, swaying in the sunlight." },
      { vi: "Còn cây sồi hùng vĩ đã bị bật gốc, nằm ngổn ngang bên bờ sông.", en: "But the mighty oak had been uprooted and lay sprawled by the river." }
    ]
  },
  {
    id: "vit-con-xau-xi",
    title: { vi: "Chú Vịt Con Xấu Xí", en: "The Ugly Duckling" },
    moral: { vi: "Đừng vội đánh giá qua vẻ bề ngoài. Mỗi người đều có vẻ đẹp riêng của mình.", en: "Never judge by appearances. Everyone has their own beauty." },
    scene: "duckling",
    color: "sky",
    excerpt: {
      vi: "Chú vịt con xấu xí bị cả chuồng trêu chọc. Nhưng một ngày kia, chú nhận ra mình là ai.",
      en: "The ugly duckling is mocked by everyone in the yard. But one day, he discovers who he truly is."
    },
    paragraphs: [
      { vi: "Mùa xuân đến, vịt mẹ nở ra một ổ trứng. Những chú vịt con lần lượt chui ra, xinh xắn vô cùng.", en: "Spring came, and Mother Duck hatched her eggs. One by one, adorable ducklings emerged." },
      { vi: "Chỉ có một quả trứng to nở muộn, cho ra một chú vịt con xám xịt, khác hẳn các anh chị em.", en: "Only one big egg hatched late, producing a grey duckling quite unlike his brothers and sisters." },
      { vi: "\"Nhìn kìa, vịt xấu xí!\" Các bạn trong chuồng đều trêu chọc, xa lánh chú.", en: "\"Look, the ugly duckling!\" Everyone in the yard teased and avoided him." },
      { vi: "Buồn bã, chú vịt con bỏ đi lang thang khắp nơi, không nơi nào chào đón chú.", en: "Sad and lonely, the duckling wandered away, unwelcome wherever he went." },
      { vi: "Mùa thu đến, chú nhìn thấy một đàn thiên nga trắng muốt bay ngang bầu trời, lòng chú thầm ao ước.", en: "Autumn came, and he saw a flock of snowy swans flying across the sky, secretly wishing he were like them." },
      { vi: "Mùa đông trôi qua, xuân lại về. Chú vịt con giờ đã lớn, bơi ra giữa hồ.", en: "Winter passed and spring returned. The duckling, now grown, swam out to the middle of the lake." },
      { vi: "Chú cúi xuống nhìn bóng mình dưới nước — và kinh ngạc nhận ra mình đã trở thành một con thiên nga trắng muốt tuyệt đẹp.", en: "He lowered his head to look at his reflection — and was amazed to see he had become a beautiful white swan." },
      { vi: "Đàn thiên nga bơi tới, vui vẻ chào đón chú như một người bạn mới.", en: "The swans swam over and happily welcomed him as a new friend." }
    ]
  },
  {
    id: "ba-chu-heo-con",
    title: { vi: "Ba Chú Heo Con", en: "The Three Little Pigs" },
    moral: { vi: "Chịu khó làm việc chăm chỉ, chuẩn bị kỹ càng sẽ giúp ta an toàn.", en: "Hard work and careful preparation keep us safe." },
    scene: "pigs",
    color: "ngh",
    excerpt: {
      vi: "Ba chú heo con xây ba ngôi nhà: một bằng rơm, một bằng gỗ, một bằng gạch. Sói đến, chuyện gì xảy ra?",
      en: "Three little pigs build three houses: one of straw, one of sticks, one of bricks. The wolf comes — what happens next?"
    },
    paragraphs: [
      { vi: "Ngày xưa, có ba chú heo con rời nhà mẹ để tự lập.", en: "Once upon a time, three little pigs left home to live on their own." },
      { vi: "Heo cả lười biếng, làm một túp lều bằng rơm cho nhanh.", en: "The lazy first pig built a hut of straw in a hurry." },
      { vi: "Heo hai cũng ham chơi, làm nhà bằng que gỗ.", en: "The playful second pig built a house of sticks." },
      { vi: "Riêng heo út chăm chỉ, xây nhà bằng gạch thật kiên cố.", en: "Only the diligent youngest pig built a sturdy house of bricks." },
      { vi: "Một hôm, con sói đói đi ngang, thấy lều rơm liền gầm lên: \"Thổi cho nhà ngươi bay nhé!\"", en: "One day, a hungry wolf passed by, saw the straw hut, and growled: \"I'll huff and I'll puff!\"" },
      { vi: "Sói thổi một hơi, lều rơm bay tơi tả. Heo cả hốt hoảng chạy sang nhà heo hai.", en: "The wolf blew once, and the straw hut collapsed. The frightened pig ran to his brother's stick house." },
      { vi: "Sói lại thổi, nhà gỗ cũng đổ sập. Hai anh em cuống cuồng chạy sang nhà heo út.", en: "The wolf blew again, and the stick house fell too. Both pigs dashed to the brick house." },
      { vi: "Sói thổi hết hơi mà nhà gạch vẫn sừng sững. Nó trèo lên mái định chui qua ống khói, nhưng rơi tõm vào nồi nước sôi, vội vã bỏ chạy.", en: "The wolf blew until he was breathless, but the brick house stood firm. He climbed onto the roof to sneak down the chimney — and landed in a pot of boiling water, fleeing in pain." }
    ]
  },
  {
    id: "cay-tre-tram-dot",
    title: { vi: "Cây Tre Trăm Đốt", en: "The Hundred-Knot Bamboo" },
    moral: { vi: "Người lương thiện, chăm chỉ sẽ được đền đáp xứng đáng.", en: "Honest, hardworking people are rewarded in the end." },
    scene: "bamboo",
    color: "teal",
    excerpt: {
      vi: "Chàng trai hiền lành đi tìm cây tre trăm đốt để cưới con gái phú ông. Bụt sẽ giúp chàng thế nào?",
      en: "A kind young man seeks a bamboo with a hundred knots to marry the landlord's daughter. How will the Buddha help him?"
    },
    paragraphs: [
      { vi: "Ngày xưa, có một chàng trai nghèo hiền lành đi ở cho một lão phú ông keo kiệt.", en: "Long ago, a poor, kind young man worked for a miserly rich landlord." },
      { vi: "Chàng yêu con gái phú ông. Phú ông hứa: \"Con hãy đi tìm cây tre trăm đốt về đây, ta sẽ gả con gái cho.\"", en: "The young man loved the landlord's daughter. The landlord promised: \"Find me a bamboo with a hundred knots, and you shall marry her.\"" },
      { vi: "Chàng trai lên rừng tìm suốt mấy ngày mà chẳng thấy cây tre nào trăm đốt.", en: "The young man searched the forest for days but found no bamboo with a hundred knots." },
      { vi: "Chàng ngồi khóc bên gốc cây. Bụt hiện lên hỏi: \"Con khóc gì thế?\"", en: "He sat down and wept by a tree. The Buddha appeared and asked: \"Why are you crying, my child?\"" },
      { vi: "Nghe chuyện, Bụt bảo: \"Con hãy đốn cây tre này, đếm đủ trăm đốt, rồi niệm: Khắc nhập, khắc nhập!\"", en: "After hearing his tale, the Buddha said: \"Cut down this bamboo, count a hundred knots, then chant: Join together, join together!\"" },
      { vi: "Chàng trai làm theo. Cây tre liền nối liền trăm đốt thành một cây tre dài thẳng tắp.", en: "The young man obeyed. The bamboo joined its hundred knots into one long, straight stalk." },
      { vi: "Chàng hí hửng vác tre về. Phú ông thấy vậy giật mình, nhưng vẫn nuốt lời không gả con gái.", en: "Joyfully, he carried it home. The landlord was startled, yet still refused to keep his promise." },
      { vi: "Chàng trai niệm: \"Khắc xuất, khắc xuất!\" Cây tre liền tách rời ra, kẹp chặt lấy phú ông.", en: "The young man chanted: \"Separate, separate!\" The bamboo split apart and clamped tightly onto the landlord." },
      { vi: "Phú ông van xin, đành gả con gái cho chàng. Từ đó, chàng trai hiền lành sống hạnh phúc.", en: "Begging for mercy, the landlord finally gave him his daughter. From then on, the kind young man lived happily." }
    ]
  },
  {
    id: "su-tich-banh-chung",
    title: { vi: "Sự Tích Bánh Chưng Bánh Dày", en: "The Legend of Chung Cake" },
    moral: { vi: "Trí tuệ và tấm lòng đáng quý hơn mọi của cải vật chất.", en: "Wisdom and a sincere heart are worth more than any treasure." },
    scene: "banhchung",
    color: "plum",
    excerpt: {
      vi: "Vua Hùng muốn truyền ngôi cho con nào dâng được món ăn ý nghĩa nhất. Hoàng tử Lang Liêu nghĩ ra điều gì?",
      en: "King Hung will pass the throne to the son who offers the most meaningful dish. What does Prince Lang Lieu devise?"
    },
    paragraphs: [
      { vi: "Ngày xưa, vua Hùng thứ sáu tuổi già, muốn truyền ngôi cho con.", en: "Long ago, the sixth Hung King, growing old, wished to pass the throne to his son." },
      { vi: "Vua nói với các hoàng tử: \"Ai tìm được món ăn ngon nhất, ý nghĩa nhất để dâng cúng tổ tiên, ta sẽ truyền ngôi cho.\"", en: "The king told his princes: \"Whoever brings the most delicious and meaningful dish to offer our ancestors shall inherit the throne.\"" },
      { vi: "Các hoàng tử sai người đi tìm sơn hào hải vị khắp nơi.", en: "The other princes sent servants far and wide to seek rare delicacies." },
      { vi: "Riêng hoàng tử Lang Liêu nghèo khó, chỉ có gạo nếp, đậu xanh và thịt lợn trong nhà.", en: "Only Prince Lang Lieu, poor and humble, had just sticky rice, green beans, and pork at home." },
      { vi: "Chàng suy nghĩ: \"Trời đất sinh ra cây lúa, gạo là thứ nuôi sống muôn dân.\"", en: "He pondered: \"Heaven and earth give us rice — it is what feeds the people.\"" },
      { vi: "Chàng gói gạo thành hai loại bánh: một loại vuông tượng trưng cho Đất, một loại tròn tượng trưng cho Trời.", en: "He wrapped the rice into two cakes: a square one symbolizing Earth, and a round one symbolizing Heaven." },
      { vi: "Đến ngày dâng lễ, vua cha nếm thử bánh của Lang Liêu, khen ngon và khen ý nghĩa sâu xa.", en: "On offering day, the king tasted Lang Lieu's cakes, praising both their taste and their deep meaning." },
      { vi: "Vua bèn truyền ngôi cho Lang Liêu. Từ đó, bánh chưng, bánh dày trở thành món không thể thiếu trong ngày Tết.", en: "The king passed the throne to Lang Lieu. Ever since, chung and day cakes have been essential dishes of Tet." }
    ]
  },
  {
    id: "gio-va-mat-troi",
    title: { vi: "Gió và Mặt Trời", en: "The Wind and the Sun" },
    moral: { vi: "Dịu dàng, kiên nhẫn đôi khi mạnh hơn cả sức mạnh và sự cưỡng ép.", en: "Gentleness and patience often prevail over force." },
    scene: "wind",
    color: "son",
    excerpt: {
      vi: "Gió và Mặt Trời cãi nhau xem ai mạnh hơn. Ai sẽ làm lữ khách cởi áo choàng trước?",
      en: "The Wind and the Sun argue over who is stronger. Who will make the traveler shed his cloak first?"
    },
    paragraphs: [
      { vi: "Một hôm, Gió và Mặt Trời cãi nhau xem ai mạnh hơn.", en: "One day, the Wind and the Sun argued over who was stronger." },
      { vi: "Đúng lúc đó, một lữ khách khoác áo choàng đi tới.", en: "Just then, a traveler wearing a cloak came walking by." },
      { vi: "Gió nói: \"Ai làm cho lữ khách cởi áo choàng ra trước, người đó mạnh hơn!\"", en: "The Wind said: \"Whoever makes the traveler take off his cloak first is the stronger!\"" },
      { vi: "Mặt Trời đồng ý và nhường Gió thử trước.", en: "The Sun agreed and let the Wind try first." },
      { vi: "Gió bèn gầm rú thổi mạnh, cây cối nghiêng ngả. Nhưng lữ khách càng níu chặt áo choàng hơn.", en: "The Wind blew fiercely, bending the trees. But the traveler only held his cloak tighter." },
      { vi: "Gió thổi mãi, thổi mãi đến kiệt sức vẫn không cởi được áo của lữ khách.", en: "The Wind blew and blew until it was exhausted, yet could not strip the traveler's cloak." },
      { vi: "Đến lượt Mặt Trời, dịu dàng tỏa ánh nắng ấm áp xuống.", en: "Then came the Sun's turn, gently shining its warm rays down." },
      { vi: "Lữ khách thấy nóng, liền tự cởi áo choàng ra.", en: "Feeling the heat, the traveler took off his cloak himself." },
      { vi: "Gió đành chịu thua. Dịu dàng đôi khi mạnh hơn cả bão tố.", en: "The Wind had to admit defeat. Gentleness can be stronger than any storm." }
    ]
  },
  {
    id: "ngong-de-trung-vang",
    title: { vi: "Con Ngỗng Đẻ Trứng Vàng", en: "The Goose That Laid the Golden Eggs" },
    moral: { vi: "Tham lam quá độ sẽ làm ta mất cả những gì đang có.", en: "Greed destroys what it already has." },
    scene: "goose",
    color: "son",
    excerpt: {
      vi: "Lão nông nghèo có con ngỗng đẻ trứng vàng. Nhưng lòng tham khiến lão mất tất cả.",
      en: "A poor farmer owns a goose that lays golden eggs. But greed costs him everything."
    },
    paragraphs: [
      { vi: "Ngày xưa, có một lão nông nghèo may mắn có một con ngỗng đẻ ra trứng vàng.", en: "Once upon a time, a poor farmer was lucky enough to own a goose that laid golden eggs." },
      { vi: "Mỗi sáng, lão nhặt được một quả trứng vàng óng, bán đi kiếm rất nhiều tiền.", en: "Every morning, he collected a shiny golden egg and sold it for a fortune." },
      { vi: "Nhưng lão nông ngày càng tham lam, muốn có thật nhiều vàng một lúc.", en: "But the farmer grew greedier, wanting all the gold at once." },
      { vi: "Lão nghĩ: \"Chắc chắn trong bụng ngỗng có cả một kho vàng!\"", en: "He thought: \"The goose must have a whole treasure inside its belly!\"" },
      { vi: "Thế là lão bắt con ngỗng và mổ bụng nó ra.", en: "So he seized the goose and cut it open." },
      { vi: "Nhưng bên trong chẳng có gì cả, chỉ là thịt và máu như bao con ngỗng khác.", en: "But inside there was nothing — just flesh and blood like any other goose." },
      { vi: "Từ đó, lão nông không còn quả trứng vàng nào nữa.", en: "From then on, the farmer had no more golden eggs." },
      { vi: "Lòng tham đã cướp đi tất cả những gì lão đang có.", en: "Greed had taken away everything he once possessed." }
    ]
  },
  {
    id: "chuot-thanh-thi-va-chuot-dong-que",
    title: { vi: "Chuột Thành Thị và Chuột Đồng Quê", en: "The Town Mouse and the Country Mouse" },
    moral: { vi: "Sống bình yên giản dị còn hơn giàu sang mà lúc nào cũng lo sợ.", en: "A peaceful crust is better than a fearful feast." },
    scene: "mice",
    color: "leaf",
    excerpt: {
      vi: "Chuột đồng quê mời anh họ thành thị về thăm. Bữa tiệc nào mới thật sự đáng sống?",
      en: "The country mouse invites his city cousin to visit. Which feast is truly worth living for?"
    },
    paragraphs: [
      { vi: "Một chú chuột đồng mời người anh họ ở thành thị về thăm quê.", en: "A country mouse invited his city cousin to visit the countryside." },
      { vi: "Chuột đồng dọn ra bữa tiệc đơn sơ: hạt lúa, củ khoai và vài hạt đậu.", en: "The country mouse served a simple feast: grains, a potato, and a few beans." },
      { vi: "Chuột thành thị ăn qua loa rồi chê: \"Đồ ăn quê mùa thế này sao anh chịu nổi?\"", en: "The city mouse nibbled and sneered: \"How can you stand such plain fare?\"" },
      { vi: "\"Ở thành phố của tôi, thức ăn ngon lành vô cùng! Anh hãy đến xem!\"", en: "\"In my city, the food is wonderful! Come and see!\"" },
      { vi: "Chuột đồng tò mò, bèn theo anh họ lên thành phố.", en: "Curious, the country mouse followed his cousin to the city." },
      { vi: "Vào một căn nhà sang trọng, hai anh em tha hồ ăn bánh ngọt, phô mai và thịt nướng.", en: "In a grand house, the two mice feasted on cakes, cheese, and roast meat." },
      { vi: "Bỗng cửa mở, một con mèo to lao tới. Hai chú chuột hốt hoảng chạy trốn.", en: "Suddenly the door swung open and a huge cat lunged at them. Both mice fled in terror." },
      { vi: "\"Thôi, tôi về quê đây,\" chuột đồng nói. \"Tôi thà ăn hạt lúa mà bình yên còn hơn ăn bánh ngọt mà khiếp sợ.\"", en: "\"I'm going home,\" said the country mouse. \"I'd rather eat grain in peace than cake in fear.\"" }
    ]
  },
  {
    id: "bo-dua",
    title: { vi: "Bó Đũa", en: "The Bundle of Sticks" },
    moral: { vi: "Đoàn kết thì sống, chia rẽ thì chết.", en: "United we stand, divided we fall." },
    scene: "sticks",
    color: "ngh",
    excerpt: {
      vi: "Người cha già dạy bốn đứa con hay cãi vã bài học về sức mạnh của sự đoàn kết.",
      en: "An old father teaches his four quarreling sons the power of unity."
    },
    paragraphs: [
      { vi: "Ngày xưa, có một người cha già có bốn người con trai hay cãi vã nhau.", en: "Once upon a time, an old father had four sons who quarreled constantly." },
      { vi: "Cha buồn lắm, bèn nghĩ ra một cách dạy con.", en: "Saddened, the father thought of a way to teach them." },
      { vi: "Một hôm, ông bảo các con: \"Hãy bẻ gãy bó đũa này xem!\"", en: "One day, he told his sons: \"Try to break this bundle of chopsticks!\"" },
      { vi: "Bốn người con lần lượt ra sức bẻ, nhưng bó đũa vẫn nguyên vẹn.", en: "One by one, the sons strained to break it, but the bundle stayed intact." },
      { vi: "Cha lại rút từng chiếc đũa ra và bảo: \"Giờ hãy bẻ từng chiếc một.\"", en: "The father pulled out a single stick and said: \"Now break them one by one.\"" },
      { vi: "Các con chỉ cần hơi cong tay là chiếc đũa gãy gục.", en: "With a slight bend of the wrist, each stick snapped easily." },
      { vi: "Cha ôn tồn nói: \"Các con thấy chưa? Đoàn kết như bó đũa thì không ai bẻ gãy được.\"", en: "The father said gently: \"Do you see? United like a bundle, no one can break you.\"" },
      { vi: "\"Còn chia rẽ như từng chiếc đũa, chỉ cần một chút sức là gãy.\"", en: "\"Divided like single sticks, the slightest force snaps you.\"" },
      { vi: "Từ đó, bốn anh em sống hòa thuận, yêu thương nhau.", en: "From then on, the four brothers lived in harmony, loving one another." }
    ]
  },
  {
    id: "co-gai-ban-sua",
    title: { vi: "Cô Gái Bán Sữa", en: "The Milkmaid and Her Pail" },
    moral: { vi: "Đừng mơ mộng viển vông khi chưa nắm chắc điều gì.", en: "Don't count your chickens before they hatch." },
    scene: "milkmaid",
    color: "rose",
    excerpt: {
      vi: "Trên đường ra chợ bán sữa, cô gái mơ mộng về một tương lai giàu sang. Rồi chuyện gì xảy ra?",
      en: "On her way to sell milk, a milkmaid dreams of a wealthy future. What happens next?"
    },
    paragraphs: [
      { vi: "Một cô gái đội bình sữa trên đầu, đi ra chợ bán.", en: "A milkmaid carried a pail of milk on her head to the market." },
      { vi: "Trên đường đi, cô mơ mộng: \"Bán bình sữa này, ta sẽ mua được một rổ trứng.\"", en: "Along the way, she dreamed: \"Selling this milk, I'll buy a basket of eggs.\"" },
      { vi: "\"Trứng nở thành gà, gà lớn lên ta bán đi mua một chiếc váy mới.\"", en: "\"The eggs will hatch into chicks; I'll sell the hens and buy a new dress.\"" },
      { vi: "\"Mặc váy mới ra hội, chàng trai nào cũng sẽ ngước nhìn ta...\"", en: "\"In my new dress at the fair, every lad will gaze at me...\"" },
      { vi: "Nghĩ đến đó, cô gái sung sướng lắc đầu, bĩu môi kênh kiệu.", en: "Lost in delight, she tossed her head and pursed her lips proudly." },
      { vi: "\"Choang!\" Bình sữa rơi xuống đất, vỡ tan. Sữa chảy tràn ra đường.", en: "Crash! The pail fell, shattered. Milk spilled across the road." },
      { vi: "Cô gái sững sờ nhìn. Chẳng còn trứng, gà, váy mới hay chàng trai nào cả.", en: "The girl stared in shock. No eggs, no hens, no dress, no admirers." },
      { vi: "\"Đừng mơ mộng viển vông trước khi nắm chắc điều gì,\" cô tự nhủ.", en: "\"Never count your blessings before they hatch,\" she told herself." }
    ]
  },
  {
    id: "ech-va-con-bo",
    title: { vi: "Ếch và Con Bò", en: "The Frog and the Ox" },
    moral: { vi: "Đừng cố tỏ ra lớn hơn khả năng thật của mình.", en: "Do not try to be what you are not." },
    scene: "frog",
    color: "leaf",
    excerpt: {
      vi: "Chú ếch nhỏ ganh tị với con bò to lớn, bèn phồng bụng lên cho bằng. Chuyện gì sẽ xảy ra?",
      en: "A little frog, jealous of a huge ox, puffs himself up to match. What will happen?"
    },
    paragraphs: [
      { vi: "Một chú ếch nhỏ sống ven ao, một hôm thấy một con bò to lớn đang gặm cỏ.", en: "A little frog living by a pond once saw a huge ox grazing nearby." },
      { vi: "Ếch thấy bò to quá, liền ganh tị và muốn được to như bò.", en: "Envious of the ox's size, the frog longed to be just as big." },
      { vi: "Ếch phồng bụng lên, hỏi mẹ: \"Mẹ ơi, con đã to bằng con bò chưa?\"", en: "The frog puffed up his belly and asked: \"Mother, am I as big as the ox yet?\"" },
      { vi: "Mẹ đáp: \"Chưa đâu, con còn bé lắm!\"", en: "\"Not yet, my dear, you're still tiny!\" replied his mother." },
      { vi: "Ếch lại phồng thêm, phồng thêm nữa: \"Còn bây giờ thì sao, mẹ?\"", en: "The frog puffed and puffed again: \"And now, Mother?\"" },
      { vi: "Mẹ lắc đầu: \"Con vẫn còn nhỏ hơn nhiều!\"", en: "His mother shook her head: \"Still much smaller!\"" },
      { vi: "Ếch cố sức phồng bụng thật to... \"Bụp!\" Bụng ếch vỡ tung.", en: "The frog strained with all his might... Pop! His belly burst." },
      { vi: "Cố tỏ ra lớn hơn khả năng thật của mình, chỉ chuốc lấy tai họa.", en: "Trying to be bigger than you are only brings disaster." }
    ]
  },
  {
    id: "deo-nhac-cho-meo",
    title: { vi: "Đeo Nhạc Cho Mèo", en: "Belling the Cat" },
    moral: { vi: "Ý tưởng hay mà không ai dám thực hiện thì cũng vô ích.", en: "It is easier to propose than to execute." },
    scene: "bellcat",
    color: "sky",
    excerpt: {
      vi: "Lũ chuột bàn kế đeo chuông vào cổ mèo. Nhưng ai sẽ là người làm điều đó?",
      en: "The mice plan to hang a bell on the cat. But who will do the deed?"
    },
    paragraphs: [
      { vi: "Một gia đình chuột sống trong ngôi nhà nọ, ngày đêm khiếp sợ vì con mèo hung dữ.", en: "A family of mice lived in a house, terrified day and night by a fierce cat." },
      { vi: "Chuột họp đại hội bàn cách đối phó.", en: "The mice gathered for a council to discuss a plan." },
      { vi: "Chuột trẻ đề nghị: \"Ta hãy buộc một chiếc chuông vào cổ mèo! Nghe chuông kêu, ta biết đường mà tránh!\"", en: "A young mouse proposed: \"Let's tie a bell around the cat's neck! When it rings, we'll know to hide!\"" },
      { vi: "Cả hội trường vỗ tay tán thưởng: \"Tuyệt vời! Ý tưởng hay quá!\"", en: "The whole hall applauded: \"Brilliant! What a wonderful idea!\"" },
      { vi: "Bỗng một chú chuột già lên tiếng: \"Hay đấy, nhưng ai sẽ là người đeo chuông vào cổ mèo?\"", en: "Suddenly an old mouse spoke up: \"A fine plan, but who will put the bell on the cat's neck?\"" },
      { vi: "Cả hội trường im lặng. Không một ai dám nhận.", en: "The hall fell silent. No one dared volunteer." },
      { vi: "Ý tưởng hay mà không ai thực hiện được, cũng chỉ là ý tưởng suông.", en: "A clever plan no one can carry out is no plan at all." }
    ]
  },
  {
    id: "cho-trong-mang-co",
    title: { vi: "Chó Trong Máng Cỏ", en: "The Dog in the Manger" },
    moral: { vi: "Đừng ngăn cản người khác hưởng những gì mình không dùng tới.", en: "Do not begrudge others what you cannot enjoy yourself." },
    scene: "manger",
    color: "ngh",
    excerpt: {
      vi: "Con chó nằm trong máng cỏ, gầm gừ đuổi đàn bò đói đi dù nó chẳng bao giờ ăn cỏ.",
      en: "A dog lies in a manger and snarls at hungry oxen, though he never eats hay himself."
    },
    paragraphs: [
      { vi: "Một con chó nằm ngủ trong máng cỏ đầy rơm khô.", en: "A dog lay sleeping in a manger piled high with hay." },
      { vi: "Đàn bò đi làm về, đói bụng muốn ăn cỏ trong máng.", en: "The oxen returned from work, hungry for the hay in the manger." },
      { vi: "Chó vùng dậy, gầm gừ đuổi đàn bò đi.", en: "The dog sprang up and snarled, driving the oxen away." },
      { vi: "Đàn bò năn nỉ: \"Cho chúng tôi ăn chút cỏ đi!\"", en: "The oxen pleaded: \"Please let us eat some hay!\"" },
      { vi: "Chó gầm gừ: \"Không! Cỏ này là của ta!\"", en: "The dog growled: \"No! This hay is mine!\"" },
      { vi: "Nhưng chó đâu có ăn cỏ. Nó chỉ nằm đó, canh giữ thứ mình không bao giờ dùng tới.", en: "Yet the dog never ate hay. It merely guarded what it could never use." },
      { vi: "Đàn bò lắc đầu: \"Thật vô lý! Ngăn người khác hưởng những gì mình không cần đến.\"", en: "The oxen shook their heads: \"How senseless! Denying others what you cannot enjoy yourself.\"" },
      { vi: "Đừng bao giờ ghen ghét, ngăn cản người khác hưởng những gì mình không dùng tới.", en: "Never begrudge others what you cannot use yourself." }
    ]
  },
  {
    id: "anh-tieu-phu-va-chiec-riu-vang",
    title: { vi: "Anh Tiều Phu và Chiếc Rìu Vàng", en: "The Honest Woodcutter" },
    moral: { vi: "Người thật thà, không tham lam sẽ được đền đáp xứng đáng.", en: "Honesty is always rewarded." },
    scene: "axe",
    color: "teal",
    excerpt: {
      vi: "Anh tiều phu đánh rơi chiếc rìu xuống sông. Cụ già hiện lên đưa rìu vàng, rìu bạc — anh chọn cái nào?",
      en: "A woodcutter drops his axe into the river. A sage offers him a golden axe, a silver axe — which will he choose?"
    },
    paragraphs: [
      { vi: "Ngày xưa, có anh tiều phu nghèo hiền lành, ngày ngày lên rừng đốn củi.", en: "Long ago, a poor, honest woodcutter went to the forest every day to chop wood." },
      { vi: "Một hôm, lưỡi rìu của anh tuột khỏi tay, rơi tõm xuống dòng sông sâu.", en: "One day, his axe slipped from his hand and plunged into the deep river." },
      { vi: "Anh ngồi bên bờ khóc nức nở: \"Rìu của tôi mất rồi, làm sao tôi kiếm sống đây!\"", en: "He sat weeping by the bank: \"My axe is gone! How shall I earn a living now!\"" },
      { vi: "Bỗng một cụ già râu tóc bạc phơ hiện lên, tay cầm một chiếc rìu vàng: \"Đây là rìu của con à?\"", en: "Suddenly an old sage appeared, holding a golden axe: \"Is this your axe, my child?\"" },
      { vi: "Anh tiều phu lắc đầu: \"Dạ không, rìu của con là rìu sắt.\"", en: "The woodcutter shook his head: \"No, sir, mine is an iron axe.\"" },
      { vi: "Cụ già lại đưa chiếc rìu bạc, rồi chiếc rìu sắt. Anh mừng rỡ: \"Đúng rồi, đây mới là rìu của con!\"", en: "The sage offered a silver axe, then an iron one. The man beamed: \"Yes! This is my axe!\"" },
      { vi: "Cụ già mỉm cười: \"Con thật thà, ta tặng con cả ba chiếc rìu.\"", en: "The sage smiled: \"You are honest. I give you all three axes.\"" },
      { vi: "Người thật thà, không tham lam sẽ luôn được đền đáp xứng đáng.", en: "The honest, who never covet what is not theirs, are always rewarded." }
    ]
  },
  {
    id: "ga-mai-ti-hon",
    title: { vi: "Gà Mái Tí Hon", en: "The Little Red Hen" },
    moral: { vi: "Ai không chịu góp sức thì cũng không nên mong hưởng thành quả.", en: "Those who don't lend a hand shouldn't expect a share of the reward." },
    scene: "hen",
    color: "son",
    excerpt: {
      vi: "Gà mái tí hon tự mình gieo lúa, gặt lúa và nướng bánh. Còn mèo, chó, vịt thì sao?",
      en: "The little red hen plants, harvests, and bakes all by herself. What about the cat, the dog, and the duck?"
    },
    paragraphs: [
      { vi: "Gà mái tí hon tìm được một hạt lúa mì trên cánh đồng.", en: "The little red hen found a grain of wheat in the field." },
      { vi: "Gà hỏi mèo, chó và vịt: \"Ai giúp tôi gieo hạt lúa này nào?\"", en: "She asked the cat, the dog, and the duck: \"Who will help me plant this wheat?\"" },
      { vi: "Cả ba đều lắc đầu: \"Không đâu, tôi bận lắm!\"", en: "All three refused: \"Not me, I'm busy!\"" },
      { vi: "Gà mái đành tự mình gieo, tự tưới, tự gặt, tự xay lúa.", en: "So the hen planted, watered, harvested, and milled the wheat all by herself." },
      { vi: "Khi gà nướng bánh mì thơm phức, cả ba con vật chạy lại: \"Cho tôi ăn với!\"", en: "When she baked a fragrant loaf, the three animals came running: \"May we have some?\"" },
      { vi: "Gà mái tí hon đáp: \"Không! Các bạn không giúp gieo, không giúp gặt, thì cũng không được ăn bánh.\"", en: "The little red hen replied: \"No! You didn't help plant or harvest, so you won't share the bread.\"" },
      { vi: "Và gà mái tí hon ăn chiếc bánh một mình, ngon lành.", en: "And the little red hen ate the loaf all by herself, savoring every bite." },
      { vi: "Ai không chịu góp sức thì cũng không nên mong hưởng thành quả.", en: "Those who don't lend a hand shouldn't expect a share of the reward." }
    ]
  },
  {
    id: "cao-va-co",
    title: { vi: "Cáo và Cò", en: "The Fox and the Stork" },
    moral: { vi: "Muốn người khác đối xử tốt với mình, hãy đối xử tốt với họ trước.", en: "Treat others as you wish to be treated." },
    scene: "stork",
    color: "rose",
    excerpt: {
      vi: "Cáo mời cò ăn tối bằng đĩa nông. Cò đáp lễ bằng bình cổ dài. Ai là người học được bài học?",
      en: "The fox serves the stork soup in a shallow plate. The stork repays him with a tall jar. Who learns the lesson?"
    },
    paragraphs: [
      { vi: "Một hôm, cáo mời cò đến ăn tối để trêu chọc.", en: "One day, the fox invited the stork to dinner to mock her." },
      { vi: "Cáo dọn súp ra đĩa nông, liếm lia lịa ngon lành.", en: "The fox served soup in shallow plates and lapped it up greedily." },
      { vi: "Còn cò mỏ dài, chẳng ăn được gì, đành bụng đói ra về.", en: "But the stork, with her long beak, could eat nothing and went home hungry." },
      { vi: "Ít lâu sau, cò mời cáo đến dùng bữa để đáp lễ.", en: "Some time later, the stork invited the fox to dine in return." },
      { vi: "Cò dọn súp trong những chiếc bình cổ dài, thò mỏ vào ăn ngon lành.", en: "The stork served soup in tall, narrow jars, dipping her beak in with relish." },
      { vi: "Còn cáo thè lưỡi liếm quanh miệng bình mà chẳng với tới.", en: "The fox licked around the jar's rim but could not reach a drop." },
      { vi: "Cò mỉm cười: \"Tôi chỉ đáp lễ anh đúng như cách anh đãi tôi.\"", en: "The stork smiled: \"I am only returning your hospitality.\"" },
      { vi: "Muốn người khác đối xử tốt với mình, hãy đối xử tốt với họ trước.", en: "Treat others as you wish to be treated." }
    ]
  },
  {
    id: "soi-doi-lot-cuu",
    title: { vi: "Sói Đội Lốt Cừu", en: "The Wolf in Sheep's Clothing" },
    moral: { vi: "Kẻ giả dối dù khéo che giấu đến đâu, cuối cùng cũng bị lộ tẩy.", en: "However well a deceiver hides, the truth will out in the end." },
    scene: "wolfsheep",
    color: "sky",
    excerpt: {
      vi: "Con sói đói khoác bộ da cừu để lẻn vào đàn. Liệu mưu kế có qua mắt được người chăn?",
      en: "A starving wolf dons a sheepskin to slip into the flock. Will the trick fool the shepherd?"
    },
    paragraphs: [
      { vi: "Một con sói đói lâu ngày, nghĩ ra mưu kế: đội lốt cừu để lẻn vào đàn.", en: "A starving wolf devised a scheme: disguise himself in sheepskin to slip into the flock." },
      { vi: "Sói tìm được bộ da cừu, khoác lên mình rồi trà trộn vào đàn cừu đang gặm cỏ.", en: "Finding a sheepskin, he draped it over himself and mingled with the grazing flock." },
      { vi: "Đàn cừu tưởng sói là bạn, kéo nhau đi theo.", en: "The sheep mistook the wolf for a companion and followed him." },
      { vi: "Đến chiều, người chăn cừu nhốt cả đàn vào chuồng, khóa chặt cửa.", en: "At dusk, the shepherd penned the flock and bolted the gate." },
      { vi: "Tối đến, sói đói quá, bèn chộp lấy một con cừu trong chuồng.", en: "That night, driven by hunger, the wolf seized one of the sheep." },
      { vi: "Người chăn cừu nghe tiếng động, chạy tới và nhận ra kẻ gian.", en: "Hearing the commotion, the shepherd rushed over and unmasked the impostor." },
      { vi: "Sói bị trói lại, trả giá cho trò lừa dối của mình.", en: "The wolf was bound and paid dearly for his deceit." },
      { vi: "Kẻ giả dối dù khéo che giấu đến đâu, cuối cùng cũng bị lộ tẩy.", en: "However well a deceiver hides, the truth will out in the end." }
    ]
  },
  {
    id: "khi-va-ca-sau",
    title: { vi: "Khỉ và Cá Sấu", en: "The Monkey and the Crocodile" },
    moral: { vi: "Bình tĩnh và mưu trí giúp ta thoát khỏi những hiểm nguy bất ngờ.", en: "Calmness and quick wit can rescue us from sudden danger." },
    scene: "crocodile",
    color: "teal",
    excerpt: {
      vi: "Cá sấu lừa khỉ sang sông để lấy tim khỉ. Khỉ sẽ thoát thân bằng cách nào?",
      en: "A crocodile tricks a monkey onto his back to steal his heart. How will the monkey escape?"
    },
    paragraphs: [
      { vi: "Bên bờ sông, một chú khỉ tinh nghịch sống trên cây sung sai quả.", en: "By the river, a lively monkey lived in a fig tree laden with fruit." },
      { vi: "Một con cá sấu bơi tới, làm quen với khỉ và ngày nào cũng trò chuyện vui vẻ.", en: "A crocodile swam up, befriended the monkey, and chatted with him every day." },
      { vi: "Một hôm, cá sấu mời khỉ: \"Nhà tôi ở bên kia sông, có nhiều quả ngon lắm. Anh cưỡi lên lưng tôi đi!\"", en: "One day the crocodile invited him: \"Across the river my home has delicious fruits. Ride on my back!\"" },
      { vi: "Giữa dòng, cá sấu cười nhăn nhở: \"Thật ra, vợ tôi muốn ăn tim khỉ nên tôi lừa anh sang sông!\"", en: "Midstream, the crocodile grinned wickedly: \"Truth is, my wife craves a monkey's heart, so I tricked you here!\"" },
      { vi: "Khỉ bình tĩnh nói: \"Ôi, giá anh nói sớm! Tim tôi để quên trên cây rồi. Quay lại lấy đi!\"", en: "Calmly the monkey replied: \"Oh, why didn't you say so! I left my heart up in the tree. Turn back and fetch it!\"" },
      { vi: "Cá sấu tin lời, bơi vội quay lại bờ.", en: "Believing him, the crocodile hurried back to the shore." },
      { vi: "Khỉ nhảy vọt lên cây, cười toe toét: \"Tim tôi vẫn ở đây! Cảm ơn anh đã cho tôi một chuyến đi.\"", en: "The monkey leaped into the tree and grinned: \"My heart is right here! Thanks for the ride.\"" },
      { vi: "Bình tĩnh và mưu trí giúp ta thoát khỏi những hiểm nguy bất ngờ.", en: "Calmness and quick wit can rescue us from sudden danger." }
    ]
  },
  {
    id: "cay-khe",
    title: { vi: "Cây Khế", en: "The Starfruit Tree" },
    moral: { vi: "Ở hiền gặp lành, tham lam chuốc lấy tai vạ.", en: "The kind-hearted prosper; the greedy bring ruin upon themselves." },
    scene: "starfruit",
    color: "leaf",
    excerpt: {
      vi: "Người em hiền lành được chim lạ chở đi lấy vàng. Người anh tham lam may túi to — chuyện gì xảy ra?",
      en: "A kind younger brother rides a magic bird to a golden island. His greedy elder sews a giant bag — what happens?"
    },
    paragraphs: [
      { vi: "Ngày xưa, có hai anh em cha mẹ mất sớm. Người anh tham lam chiếm hết gia sản.", en: "Long ago, two brothers lost their parents early. The greedy elder seized the whole inheritance." },
      { vi: "Người em chỉ được một túp lều tranh và một cây khế ngọt.", en: "The younger brother received only a thatched hut and a sweet starfruit tree." },
      { vi: "Một hôm, có con chim lạ bay tới ăn khế, ăn mãi không thôi.", en: "One day, a strange bird flew in and ate the starfruit, feasting endlessly." },
      { vi: "Người em nói: \"Chim ơi, chim ăn hết khế, tôi lấy gì mà sống?\"", en: "The brother pleaded: \"Dear bird, if you eat all my fruit, how shall I live?\"" },
      { vi: "Chim đáp: \"Ăn một quả, trả một cục vàng. May túi ba gang mà đựng!\"", en: "The bird replied: \"One fruit, one nugget of gold. Sew a three-span bag to carry it!\"" },
      { vi: "Người em làm theo, chim chở anh bay ra đảo vàng, đem về cả túi vàng.", en: "Obeying, the brother rode the bird to a golden island and brought home a bag full of gold." },
      { vi: "Người anh thấy vậy, liền đòi đổi cây khế lấy cả gia sản.", en: "Seeing this, the elder brother traded his whole estate for the starfruit tree." },
      { vi: "Chim lại tới, người anh may túi thật to, nhét vàng đầy ắp.", en: "The bird returned; the elder sewed an enormous bag and stuffed it with gold." },
      { vi: "Giữa biển, túi vàng quá nặng, chim chao đảo... người anh rơi xuống biển sâu.", en: "Over the sea, the bag grew too heavy, the bird wobbled... and the greedy brother plunged into the deep." },
      { vi: "Ở hiền gặp lành, tham lam chuốc lấy tai vạ.", en: "The kind-hearted prosper; the greedy bring ruin upon themselves." }
    ]
  },
  {
    id: "tam-cam",
    title: { vi: "Tấm Cám", en: "Tam and Cam" },
    moral: { vi: "Hiền lành, lương thiện cuối cùng sẽ được hạnh phúc xứng đáng.", en: "Kindness and goodness are rewarded with happiness in the end." },
    scene: "tamcam",
    color: "plum",
    excerpt: {
      vi: "Tấm hiền lành bị mẹ con Cám hãm hại. Nhờ chiếc hài rơi ở hội, số phận nàng đổi thay.",
      en: "Kind Tam is tormented by Cam and her mother. A slipper lost at the festival changes her fate."
    },
    paragraphs: [
      { vi: "Ngày xưa, có hai chị em cùng cha khác mẹ: Tấm hiền lành, Cám lười biếng.", en: "Long ago, there were two stepsisters: kind Tam and lazy Cam." },
      { vi: "Mẹ con Cám luôn bắt Tấm làm việc quần quật, lại tìm cách hại Tấm.", en: "Cam and her mother forced Tam to slave away and plotted against her." },
      { vi: "Một hôm, Tấm bắt được con cá bống, thả nuôi trong giếng.", en: "One day, Tam caught a carp and raised it in the well." },
      { vi: "Mẹ con Cám lừa Tấm đi vắng rồi bắt cá bống làm thịt.", en: "Cam's mother tricked Tam away and killed the fish." },
      { vi: "Tấm khóc thương cá bống. Bụt hiện lên bảo Tấm nhặt xương cá bỏ vào bốn chum.", en: "Weeping for her fish, Tam met the Buddha, who told her to bury its bones in four jars." },
      { vi: "Từ bốn chum, Tấm có được quần áo đẹp, ngựa và yên cương để đi dự hội.", en: "From the jars came fine clothes, a horse, and a saddle for Tam to attend the festival." },
      { vi: "Tại hội, Tấm đánh rơi chiếc hài. Hoàng tử nhặt được và nhất quyết tìm người đi vừa chiếc hài.", en: "At the festival, Tam lost her slipper. The prince found it and vowed to find its owner." },
      { vi: "Nhờ chiếc hài, hoàng tử tìm được Tấm, đón nàng về cung làm hoàng hậu.", en: "Thanks to the slipper, the prince found Tam and made her his queen." },
      { vi: "Hiền lành, lương thiện cuối cùng sẽ được hạnh phúc xứng đáng.", en: "Kindness and goodness are rewarded with happiness in the end." }
    ]
  },
  {
    id: "son-tinh-thuy-tinh",
    title: { vi: "Sơn Tinh Thủy Tinh", en: "Mountain God and Water God" },
    moral: { vi: "Tình yêu chân thành và lòng quyết tâm có thể vượt qua mọi thử thách.", en: "True love and steadfast will overcome every trial." },
    scene: "mountain",
    color: "sky",
    excerpt: {
      vi: "Sơn Tinh và Thủy Tinh cùng cầu hôn Mị Nương. Ai đến trước sẽ thắng — và kẻ thua không bao giờ nguôi giận.",
      en: "Mountain God and Water God both seek Mi Nuong's hand. First to arrive wins — and the loser never forgives."
    },
    paragraphs: [
      { vi: "Ngày xưa, vua Hùng có cô con gái Mị Nương xinh đẹp tuyệt trần.", en: "Long ago, King Hung had a daughter, Mi Nuong, of breathtaking beauty." },
      { vi: "Hai chàng trai đến cầu hôn: Sơn Tinh thần núi và Thủy Tinh thần nước.", en: "Two suitors came to ask for her hand: Mountain God and Water God." },
      { vi: "Vua bảo: \"Ai mang sính lễ đến trước, ta gả con gái cho.\"", en: "The king declared: \"Whoever brings the bridal gifts first shall wed my daughter.\"" },
      { vi: "Sơn Tinh mang lễ vật đến trước, rước Mị Nương về núi.", en: "Mountain God arrived first with his offerings and carried Mi Nuong to the mountains." },
      { vi: "Thủy Tinh đến sau, tức giận dâng nước đánh Sơn Tinh.", en: "Water God arrived late, and in fury raised the floodwaters to fight." },
      { vi: "Nước dâng cao bao nhiêu, núi lại cao lên bấy nhiêu.", en: "The higher the waters rose, the higher the mountains grew." },
      { vi: "Thủy Tinh đánh mãi, đánh mãi mà không thắng, đành rút quân.", en: "Water God fought on and on but could not win, and finally withdrew." },
      { vi: "Từ đó, cứ mỗi năm Thủy Tinh lại dâng nước, nhưng không bao giờ thắng nổi Sơn Tinh.", en: "Every year since, Water God raises the floods, yet never defeats Mountain God." },
      { vi: "Tình yêu chân thành và lòng quyết tâm có thể vượt qua mọi thử thách.", en: "True love and steadfast will overcome every trial." }
    ]
  },
  {
    id: "su-tich-qua-dua-hau",
    title: { vi: "Sự Tích Quả Dưa Hấu", en: "The Legend of the Watermelon" },
    moral: { vi: "Chăm chỉ lao động sẽ tạo nên của cải từ chính bàn tay mình.", en: "Diligent labor builds wealth from one's own hands." },
    scene: "watermelon",
    color: "leaf",
    excerpt: {
      vi: "Mai An Tiêm bị đày ra hoang đảo. Nhờ hạt giống của chim lạ, chàng tìm ra loại quả ngọt mát.",
      en: "Banished to a desert island, Mai An Tiem grows a strange bird's seed into a sweet, refreshing fruit."
    },
    paragraphs: [
      { vi: "Ngày xưa, có chàng Mai An Tiêm được vua Hùng nhận làm con nuôi.", en: "Long ago, a young man named Mai An Tiem was adopted by King Hung." },
      { vi: "Một hôm, An Tiêm nói: \"Của cải phải do chính tay mình làm ra mới bền.\"", en: "One day, An Tiem remarked: \"Wealth made by one's own hands lasts longest.\"" },
      { vi: "Vua nghe vậy giận lắm, đày An Tiêm ra một hoang đảo.", en: "Angered, the king exiled An Tiem to a deserted island." },
      { vi: "Trên đảo, An Tiêm và vợ con dựng lều, trồng trọt, săn bắt để sống.", en: "On the island, An Tiem and his family built shelter, farmed, and hunted to survive." },
      { vi: "Một hôm, An Tiêm thấy một con chim lạ tha hạt đen về đảo.", en: "One day, An Tiem saw a strange bird carry a black seed to the island." },
      { vi: "Chàng nhặt hạt đem trồng. Cây lớn nhanh, cho những quả to tròn, ruột đỏ mọng, ngọt mát.", en: "He planted the seed. The vine grew fast, bearing big round fruits with sweet red flesh." },
      { vi: "An Tiêm đặt tên là dưa hấu, đem bán khắp nơi, trở nên giàu có.", en: "Naming the fruit watermelon, An Tiem traded it far and wide and grew wealthy." },
      { vi: "Vua biết chuyện, cảm phục tài đức, đón An Tiêm về triều.", en: "Learning of this, the king admired his virtue and welcomed him back to court." },
      { vi: "Chăm chỉ lao động sẽ tạo nên của cải từ chính bàn tay mình.", en: "Diligent labor builds wealth from one's own hands." }
    ]
  },
  {
    id: "su-tich-cay-vu-sua",
    title: { vi: "Sự Tích Cây Vú Sữa", en: "The Legend of the Milk Fruit" },
    moral: { vi: "Đừng đợi đến khi mất đi mới biết quý trọng cha mẹ.", en: "Cherish your parents before it is too late." },
    scene: "milktree",
    color: "plum",
    excerpt: {
      vi: "Cậu bé ham chơi bỏ nhà ra đi. Khi trở về, mẹ đã không còn — chỉ còn cây vú sữa trước sân.",
      en: "A restless boy runs away from home. When he returns, his mother is gone — only the milk fruit tree remains."
    },
    paragraphs: [
      { vi: "Ngày xưa, có cậu bé ham chơi, mải rong chơi đến quên cả mẹ.", en: "Long ago, there was a boy so fond of playing that he forgot his mother." },
      { vi: "Một lần, cậu bị bạn bè xúi giục, đánh mẹ rồi bỏ nhà ra đi.", en: "Once, egged on by bad friends, he struck his mother and ran away from home." },
      { vi: "Mẹ cậu đứng tựa cửa, ngóng con ngày đêm, khóc đến cạn nước mắt.", en: "His mother leaned by the door, watching for him day and night, weeping until her tears ran dry." },
      { vi: "Nhiều năm trôi qua, cậu bé mới nhớ mẹ, bèn tìm đường về nhà.", en: "Years passed before the boy remembered his mother and found his way home." },
      { vi: "Về đến nơi, cậu chỉ thấy cây xanh trước sân, mẹ đã không còn nữa.", en: "Returning, he found only a green tree in the yard — his mother was gone." },
      { vi: "Cậu ôm cây khóc nức nở. Cây bỗng trổ hoa, kết thành những quả tròn thơm.", en: "He hugged the tree and sobbed. Suddenly it blossomed and bore round, fragrant fruit." },
      { vi: "Cậu hái quả, bẻ ra — dòng sữa trắng ngọt chảy ra, như dòng sữa mẹ năm xưa.", en: "He picked a fruit and broke it open — sweet white milk flowed out, like his mother's milk long ago." },
      { vi: "Cậu bé gọi đó là cây vú sữa, và khắc ghi bài học về tình mẫu tử.", en: "He named it the milk fruit tree, and forever cherished the lesson of a mother's love." },
      { vi: "Đừng đợi đến khi mất đi mới biết quý trọng cha mẹ.", en: "Cherish your parents before it is too late." }
    ]
  },
  {
    id: "thach-sanh",
    title: { vi: "Thạch Sanh", en: "Thach Sanh" },
    moral: { vi: "Người lương thiện, dũng cảm sẽ được đền đáp; kẻ tham lam, gian ác sẽ bị trừng trị.", en: "Brave and honest hearts are rewarded; the greedy and wicked are punished." },
    scene: "thachsanh",
    color: "teal",
    excerpt: {
      vi: "Chàng Thạch Sanh hiền lành bị kẻ xấu cướp công. Nhờ cây đàn thần, sự thật được phơi bày.",
      en: "Honest Thach Sanh has his deeds stolen by a villain. His magic lute reveals the truth."
    },
    paragraphs: [
      { vi: "Ngày xưa, có chàng Thạch Sanh mồ côi, sống hiền lành, chăm chỉ, giỏi võ nghệ.", en: "Long ago, the orphan Thach Sanh lived honestly, worked hard, and excelled in martial arts." },
      { vi: "Chàng kết nghĩa anh em với Lý Thông, một kẻ tham lam xảo quyệt.", en: "He swore brotherhood with Ly Thong, a cunning and greedy man." },
      { vi: "Lý Thông lừa Thạch Sanh đi giết chằn tinh để cướp công.", en: "Ly Thong tricked Thach Sanh into slaying the ogre, then stole the credit." },
      { vi: "Thạch Sanh lại cứu công chúa khỏi tay đại bàng, nhưng Lý Thông lại cướp công lần nữa.", en: "Thach Sanh also rescued the princess from an eagle, yet Ly Thong stole the glory again." },
      { vi: "Vua gả công chúa cho Thạch Sanh. Lý Thông ghen ghét, bày mưu hãm hại.", en: "The king gave the princess to Thach Sanh. Jealous Ly Thong schemed against him." },
      { vi: "Nhờ cây đàn thần, Thạch Sanh vạch mặt Lý Thông, giải oan cho mình.", en: "With his magic lute, Thach Sanh exposed Ly Thong and cleared his name." },
      { vi: "Lý Thông bị trừng phạt thích đáng, còn Thạch Sanh sống hạnh phúc bên công chúa.", en: "Ly Thong was duly punished, while Thach Sanh lived happily with the princess." },
      { vi: "Người lương thiện, dũng cảm sẽ được đền đáp; kẻ tham lam, gian ác sẽ bị trừng trị.", en: "Brave and honest hearts are rewarded; the greedy and wicked are punished." }
    ]
  },
  {
    id: "ai-mua-hanh-toi",
    title: { vi: "Ai Mua Hành Tôi", en: "Who Buys My Onions" },
    moral: { vi: "Ở hiền gặp lành, tham lam chỉ chuốc lấy mất mát.", en: "The kind-hearted thrive; greed only brings loss." },
    scene: "onion",
    color: "son",
    excerpt: {
      vi: "Cậu bé hiền lành rao bán hành theo lời bà tiên. Lão phú ông tham lam mua hết — rồi chuyện gì xảy ra?",
      en: "A kind boy sells onions as a fairy instructed. A greedy landlord buys them all — then what happens?"
    },
    paragraphs: [
      { vi: "Ngày xưa, có hai mẹ con nghèo khổ sống bằng nghề trồng hành.", en: "Long ago, a poor widow and her son made a living growing onions." },
      { vi: "Một hôm, cậu bé ra đồng gặp một bà tiên, được tặng một món quà kỳ diệu.", en: "One day in the field, the boy met a fairy who gifted him a magical present." },
      { vi: "Bà tiên dặn: \"Con hãy rao: Ai mua hành tôi! Ai mua hành tôi! Người mua hành sẽ được giàu sang.\"", en: "The fairy said: \"Call out: Who buys my onions! Whoever buys shall grow rich.\"" },
      { vi: "Cậu bé làm theo lời bà tiên. Một lão phú ông nghe vậy liền mua hết hành.", en: "The boy obeyed. A rich landlord heard him and bought all the onions." },
      { vi: "Lão đem hành về nhà, bỗng thấy vàng bạc chảy ra từ nồi hành.", en: "Taking the onions home, the landlord found gold pouring from the pot." },
      { vi: "Lão tham lam nghĩ: \"Chắc chắn còn nhiều của cải hơn nữa!\" bèn lật úp nồi hành.", en: "Greedily he thought: \"There must be more!\" and overturned the pot." },
      { vi: "Nhưng nồi hành úp xuống, vàng bạc cũng biến mất, chỉ còn lại nồi hành trống trơn.", en: "But once overturned, the gold vanished, leaving only an empty pot." },
      { vi: "Còn hai mẹ con hiền lành nhờ bán hành mà sống sung túc, hạnh phúc.", en: "Meanwhile, the kind mother and son prospered happily from selling onions." },
      { vi: "Ở hiền gặp lành, tham lam chỉ chuốc lấy mất mát.", en: "The kind-hearted thrive; greed only brings loss." }
    ]
  }
];