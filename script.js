// SONG LIST DATA
const songs = [
  { title: "starlog", artist: "Kaya Nishikino", src: "songs/song (1).mp3", cover: "covers/cover1.png" },
  { title: "Tulip", artist: "Mielune (Kaya Nishikino, Yuno Hanaki, Felynne deRouge)", src: "songs/song (2).mp3", cover: "covers/cover1.png" },
  { title: "Love Is an Open Door", artist: "Kaya Nishikino x Misma Ryzing", src: "songs/song (3).mp3", cover: "covers/cover1.png" },
  { title: "Yowamushi Montblanc (Reloaded)", artist: "Kaya Nishikino", src: "songs/song (4).mp3", cover: "covers/cover1.png" },
  { title: "Luka Luka ★ Night Fever", artist: "Kaya Nishikino", src: "songs/song (5).mp3", cover: "covers/cover1.png" },
  { title: "Music S.T.A.R.T!!", artist: "Kaya Nishikino", src: "songs/song (6).mp3", cover: "covers/cover1.png" },
  { title: "Ojamajo Carnival!!", artist: "Kaya Nishikino x Meimi Majokko", src: "songs/song (7).mp3", cover: "covers/cover1.png" },
  { title: "Ride on Time", artist: "Kaya Nishikino x Namiji Freesia", src: "songs/song (8).mp3", cover: "covers/cover1.png" },
  { title: "Samishii Nettaigyo", artist: "Kaya Nishikino x Nene Amano", src: "songs/song (9).mp3", cover: "covers/cover1.png" },
  { title: "DANZEN! Futari wa Pretty Cure", artist: "Kaya Nishikino", src: "songs/song (10).mp3", cover: "covers/cover1.png" },
  { title: "FREELY TOMORROW", artist: "Kaya Nishikino x Miel Kumanui", src: "songs/song (11).mp3", cover: "covers/cover1.png" },
  { title: "Koisuru Fortune Cookie", artist: "Kaya Nishikino x Kohaku Yumekui", src: "songs/song (12).mp3", cover: "covers/cover1.png" },
  { title: "Snow Song Show", artist: "Production kawaii", src: "songs/song (13).mp3", cover: "covers/cover1.png" },
  { title: "Listen!!", artist: "Kaya Nishikino", src: "songs/song (14).mp3", cover: "covers/cover1.png" },
  { title: "Plastic Love", artist: "Kaya Nishikino", src: "songs/song (15).mp3", cover: "covers/cover1.png" },
  { title: "Renai Circulation", artist: "Kaya Nishikino", src: "songs/song (16).mp3", cover: "covers/cover1.png" },
  { title: "Kawaiku Naritai", artist: "Kaya Nishikino", src: "songs/song (17).mp3", cover: "covers/cover1.png" },
  { title: "Cruel Angel's Thesis", artist: "Kaya Nishikino", src: "songs/song (18).mp3", cover: "covers/cover1.png" },
  { title: "drop pop candy", artist: "Kaya Nishikino", src: "songs/song (19).mp3", cover: "covers/cover1.png" },
  { title: "Ima Suki ni Naru.", artist: "Kaya Nishikino", src: "songs/song (20).mp3", cover: "covers/cover1.png" },
  { title: "Jishou Mushoku", artist: "Kaya Nishikino x Lethe Bonapuchi", src: "songs/song (21).mp3", cover: "covers/cover1.png" },
  { title: "Kokoro no Tamago", artist: "Kaya Nishikino", src: "songs/song (22).mp3", cover: "covers/cover1.png" },
  { title: "Telephone Number", artist: "Kaya Nishikino", src: "songs/song (23).mp3", cover: "covers/cover1.png" },
  { title: "U&I", artist: "Kaya Nishikino", src: "songs/song (24).mp3", cover: "covers/cover1.png" },
  { title: "Haru Haru Yukai", artist: "Kaya Nishikino", src: "songs/song (25).mp3", cover: "covers/cover1.png" },
  { title: "Yakusoku no Kizuna", artist: "Kaya Nishikino x Reina Sun", src: "songs/song (26).mp3", cover: "covers/cover1.png" },
  { title: "Don't say lazy", artist: "Kaya Nishikino", src: "songs/song (27).mp3", cover: "covers/cover1.png" },
  { title: "My Sweet Heart", artist: "Kaya Nishikino", src: "songs/song (28).mp3", cover: "covers/cover1.png" },
  { title: "PONPONPON", artist: "Kaya Nishikino", src: "songs/song (29).mp3", cover: "covers/cover1.png" },
  { title: "Romeo and Cinderella", artist: "Kaya Nishikino", src: "songs/song (30).mp3", cover: "covers/cover1.png" },
  { title: "Saga Jihen", artist: "Kaya Nishikino x Yae Yugiri", src: "songs/song (31).mp3", cover: "covers/cover1.png" },
  { title: "Sakura Kiss", artist: "Kaya Nishikino", src: "songs/song (32).mp3", cover: "covers/cover1.png" },
  { title: "Mayonaka no Door / Stay With Me", artist: "Kaya Nishikino", src: "songs/song (33).mp3", cover: "covers/cover1.png" },
  { title: "SENBONZAKURA", artist: "Kaya Nishikino", src: "songs/song (34).mp3", cover: "covers/cover1.png" },
  { title: "Bokura no LIVE Kimi to no LIFE", artist: "Kaya Nishikino", src: "songs/song (35).mp3", cover: "covers/cover1.png" },
  { title: "Brave Heart", artist: "Kaya Nishikino", src: "songs/song (36).mp3", cover: "covers/cover1.png" },
  { title: "Dokkin Mahou Tsukai Pretty Cure!", artist: "Kaya Nishikino", src: "songs/song (37).mp3", cover: "covers/cover1.png" },
  { title: "Fiction", artist: "Kaya Nishikino", src: "songs/song (38).mp3", cover: "covers/cover1.png" },
  { title: "Let Me Be With You", artist: "Kaya Nishikino", src: "songs/song (39).mp3", cover: "covers/cover1.png" },
  { title: "NO, Thank You!", artist: "Kaya Nishikino", src: "songs/song (40).mp3", cover: "covers/cover1.png" },
  { title: "Shiroi Yuki no princess wa", artist: "Kaya Nishikino x Miuna Usako", src: "songs/song (41).mp3", cover: "covers/cover1.png" },
  { title: "I CAN'T STOP THE LONELINESS", artist: "Kaya Nishikino", src: "songs/song (42).mp3", cover: "covers/cover1.png" },
  { title: "Song 43", artist: "Kaya Nishikino", src: "songs/song (43).mp3", cover: "covers/cover1.png" },
  { title: "Song 44", artist: "Kaya Nishikino", src: "songs/song (44).mp3", cover: "covers/cover1.png" },
  { title: "Song 45", artist: "Kaya Nishikino", src: "songs/song (45).mp3", cover: "covers/cover1.png" },
  { title: "Song 46", artist: "Kaya Nishikino", src: "songs/song (46).mp3", cover: "covers/cover1.png" },
  { title: "Song 47", artist: "Kaya Nishikino", src: "songs/song (47).mp3", cover: "covers/cover1.png" },
  { title: "Song 48", artist: "Kaya Nishikino", src: "songs/song (48).mp3", cover: "covers/cover1.png" },
  { title: "Song 49", artist: "Kaya Nishikino", src: "songs/song (49).mp3", cover: "covers/cover1.png" },
  { title: "Song 50", artist: "Kaya Nishikino", src: "songs/song (50).mp3", cover: "covers/cover1.png" },
  { title: "Song 51", artist: "Kaya Nishikino", src: "songs/song (51).mp3", cover: "covers/cover1.png" },
  { title: "Song 52", artist: "Kaya Nishikino", src: "songs/song (52).mp3", cover: "covers/cover1.png" },
  { title: "Song 53", artist: "Kaya Nishikino", src: "songs/song (53).mp3", cover: "covers/cover1.png" },
  { title: "Song 54", artist: "Kaya Nishikino", src: "songs/song (54).mp3", cover: "covers/cover1.png" },
  { title: "Song 55", artist: "Kaya Nishikino", src: "songs/song (55).mp3", cover: "covers/cover1.png" },
  { title: "Song 56", artist: "Kaya Nishikino", src: "songs/song (56).mp3", cover: "covers/cover1.png" },
  { title: "Song 57", artist: "Kaya Nishikino", src: "songs/song (57).mp3", cover: "covers/cover1.png" },
  { title: "Song 58", artist: "Kaya Nishikino", src: "songs/song (58).mp3", cover: "covers/cover1.png" },
  { title: "Song 59", artist: "Kaya Nishikino", src: "songs/song (59).mp3", cover: "covers/cover1.png" },
  { title: "Song 60", artist: "Kaya Nishikino", src: "songs/song (60).mp3", cover: "covers/cover1.png" },
  { title: "Song 61", artist: "Kaya Nishikino", src: "songs/song (61).mp3", cover: "covers/cover1.png" },
  { title: "Song 62", artist: "Kaya Nishikino", src: "songs/song (62).mp3", cover: "covers/cover1.png" },
  { title: "Song 63", artist: "Kaya Nishikino", src: "songs/song (63).mp3", cover: "covers/cover1.png" },
  { title: "Song 64", artist: "Kaya Nishikino", src: "songs/song (64).mp3", cover: "covers/cover1.png" },
  { title: "Song 65", artist: "Kaya Nishikino", src: "songs/song (65).mp3", cover: "covers/cover1.png" },
  { title: "Song 66", artist: "Kaya Nishikino", src: "songs/song (66).mp3", cover: "covers/cover1.png" },
  { title: "Song 67", artist: "Kaya Nishikino", src: "songs/song (67).mp3", cover: "covers/cover1.png" },
  { title: "Song 68", artist: "Kaya Nishikino", src: "songs/song (68).mp3", cover: "covers/cover1.png" },
  { title: "Song 69", artist: "Kaya Nishikino", src: "songs/song (69).mp3", cover: "covers/cover1.png" },
  { title: "Song 70", artist: "Kaya Nishikino", src: "songs/song (70).mp3", cover: "covers/cover1.png" },
  { title: "Song 71", artist: "Kaya Nishikino", src: "songs/song (71).mp3", cover: "covers/cover1.png" },
  { title: "Song 72", artist: "Kaya Nishikino", src: "songs/song (72).mp3", cover: "covers/cover1.png" },
  { title: "Song 73", artist: "Kaya Nishikino", src: "songs/song (73).mp3", cover: "covers/cover1.png" },
  { title: "Song 74", artist: "Kaya Nishikino", src: "songs/song (74).mp3", cover: "covers/cover1.png" },
  { title: "Song 75", artist: "Kaya Nishikino", src: "songs/song (75).mp3", cover: "covers/cover1.png" },
  { title: "Song 76", artist: "Kaya Nishikino", src: "songs/song (76).mp3", cover: "covers/cover1.png" },
  { title: "Song 77", artist: "Kaya Nishikino", src: "songs/song (77).mp3", cover: "covers/cover1.png" },
  { title: "Song 78", artist: "Kaya Nishikino", src: "songs/song (78).mp3", cover: "covers/cover1.png" },
  { title: "Song 79", artist: "Kaya Nishikino", src: "songs/song (79).mp3", cover: "covers/cover1.png" },
  { title: "Song 80", artist: "Kaya Nishikino", src: "songs/song (80).mp3", cover: "covers/cover1.png" },
  { title: "Song 81", artist: "Kaya Nishikino", src: "songs/song (81).mp3", cover: "covers/cover1.png" },
  { title: "Song 82", artist: "Kaya Nishikino", src: "songs/song (82).mp3", cover: "covers/cover1.png" },
  { title: "Song 83", artist: "Kaya Nishikino", src: "songs/song (83).mp3", cover: "covers/cover1.png" },
  { title: "Song 84", artist: "Kaya Nishikino", src: "songs/song (84).mp3", cover: "covers/cover1.png" },
  { title: "Song 85", artist: "Kaya Nishikino", src: "songs/song (85).mp3", cover: "covers/cover1.png" },
  { title: "Song 86", artist: "Kaya Nishikino", src: "songs/song (86).mp3", cover: "covers/cover1.png" },
  { title: "Song 87", artist: "Kaya Nishikino", src: "songs/song (87).mp3", cover: "covers/cover1.png" },
  { title: "Song 88", artist: "Kaya Nishikino", src: "songs/song (88).mp3", cover: "covers/cover1.png" },
  { title: "Song 89", artist: "Kaya Nishikino", src: "songs/song (89).mp3", cover: "covers/cover1.png" },
  { title: "Song 90", artist: "Kaya Nishikino", src: "songs/song (90).mp3", cover: "covers/cover1.png" },
  { title: "Song 91", artist: "Kaya Nishikino", src: "songs/song (91).mp3", cover: "covers/cover1.png" },
  { title: "Song 92", artist: "Kaya Nishikino", src: "songs/song (92).mp3", cover: "covers/cover1.png" },
  { title: "Song 93", artist: "Kaya Nishikino", src: "songs/song (93).mp3", cover: "covers/cover1.png" },
  { title: "Song 94", artist: "Kaya Nishikino", src: "songs/song (94).mp3", cover: "covers/cover1.png" },
  { title: "Song 95", artist: "Kaya Nishikino", src: "songs/song (95).mp3", cover: "covers/cover1.png" },
  { title: "Song 96", artist: "Kaya Nishikino", src: "songs/song (96).mp3", cover: "covers/cover1.png" },
  { title: "Song 97", artist: "Kaya Nishikino", src: "songs/song (97).mp3", cover: "covers/cover1.png" },
  { title: "Song 98", artist: "Kaya Nishikino", src: "songs/song (98).mp3", cover: "covers/cover1.png" },
  { title: "Song 99", artist: "Kaya Nishikino", src: "songs/song (99).mp3", cover: "covers/cover1.png" },
  { title: "Song 100", artist: "Kaya Nishikino", src: "songs/song (100).mp3", cover: "covers/cover1.png" },
  { title: "Song 100", artist: "Kaya Nishikino", src: "songs/song (100).mp3", cover: "covers/cover1.png" },
  { title: "Song 101", artist: "Kaya Nishikino", src: "songs/song (101).mp3", cover: "covers/cover1.png" },
  { title: "Song 102", artist: "Kaya Nishikino", src: "songs/song (102).mp3", cover: "covers/cover1.png" },
  { title: "Song 103", artist: "Kaya Nishikino", src: "songs/song (103).mp3", cover: "covers/cover1.png" },
  { title: "Song 104", artist: "Kaya Nishikino", src: "songs/song (104).mp3", cover: "covers/cover1.png" },
  { title: "Song 105", artist: "Kaya Nishikino", src: "songs/song (105).mp3", cover: "covers/cover1.png" },
  { title: "Song 106", artist: "Kaya Nishikino", src: "songs/song (106).mp3", cover: "covers/cover1.png" },
  { title: "Song 107", artist: "Kaya Nishikino", src: "songs/song (107).mp3", cover: "covers/cover1.png" },
  { title: "Song 108", artist: "Kaya Nishikino", src: "songs/song (108).mp3", cover: "covers/cover1.png" },
  { title: "Song 109", artist: "Kaya Nishikino", src: "songs/song (109).mp3", cover: "covers/cover1.png" },
  { title: "Song 110", artist: "Kaya Nishikino", src: "songs/song (110).mp3", cover: "covers/cover1.png" },
  { title: "Song 111", artist: "Kaya Nishikino", src: "songs/song (111).mp3", cover: "covers/cover1.png" },
  { title: "Song 112", artist: "Kaya Nishikino", src: "songs/song (112).mp3", cover: "covers/cover1.png" },
  { title: "Song 113", artist: "Kaya Nishikino", src: "songs/song (113).mp3", cover: "covers/cover1.png" },
  { title: "Song 114", artist: "Kaya Nishikino", src: "songs/song (114).mp3", cover: "covers/cover1.png" },
  { title: "Song 115", artist: "Kaya Nishikino", src: "songs/song (115).mp3", cover: "covers/cover1.png" },
  { title: "Song 116", artist: "Kaya Nishikino", src: "songs/song (116).mp3", cover: "covers/cover1.png" },
  { title: "Song 117", artist: "Kaya Nishikino", src: "songs/song (117).mp3", cover: "covers/cover1.png" },
  { title: "Song 118", artist: "Kaya Nishikino", src: "songs/song (118).mp3", cover: "covers/cover1.png" },
  { title: "Song 119", artist: "Kaya Nishikino", src: "songs/song (119).mp3", cover: "covers/cover1.png" },
  { title: "Song 120", artist: "Kaya Nishikino", src: "songs/song (120).mp3", cover: "covers/cover1.png" },
  { title: "Song 121", artist: "Kaya Nishikino", src: "songs/song (121).mp3", cover: "covers/cover1.png" },
  { title: "Song 122", artist: "Kaya Nishikino", src: "songs/song (122).mp3", cover: "covers/cover1.png" },
  { title: "Song 123", artist: "Kaya Nishikino", src: "songs/song (123).mp3", cover: "covers/cover1.png" },
  { title: "Song 124", artist: "Kaya Nishikino", src: "songs/song (124).mp3", cover: "covers/cover1.png" },
  { title: "Song 125", artist: "Kaya Nishikino", src: "songs/song (125).mp3", cover: "covers/cover1.png" },
  { title: "Song 126", artist: "Kaya Nishikino", src: "songs/song (126).mp3", cover: "covers/cover1.png" },
  { title: "Song 127", artist: "Kaya Nishikino", src: "songs/song (127).mp3", cover: "covers/cover1.png" },
  { title: "Song 128", artist: "Kaya Nishikino", src: "songs/song (128).mp3", cover: "covers/cover1.png" },
  { title: "Song 129", artist: "Kaya Nishikino", src: "songs/song (129).mp3", cover: "covers/cover1.png" },
  { title: "Song 130", artist: "Kaya Nishikino", src: "songs/song (130).mp3", cover: "covers/cover1.png" },
  { title: "Song 131", artist: "Kaya Nishikino", src: "songs/song (131).mp3", cover: "covers/cover1.png" },
  { title: "Song 132", artist: "Kaya Nishikino", src: "songs/song (132).mp3", cover: "covers/cover1.png" },
  { title: "Song 133", artist: "Kaya Nishikino", src: "songs/song (133).mp3", cover: "covers/cover1.png" },
  { title: "Song 134", artist: "Kaya Nishikino", src: "songs/song (134).mp3", cover: "covers/cover1.png" },
  { title: "Song 135", artist: "Kaya Nishikino", src: "songs/song (135).mp3", cover: "covers/cover1.png" },
  { title: "Song 136", artist: "Kaya Nishikino", src: "songs/song (136).mp3", cover: "covers/cover1.png" },
  { title: "Song 137", artist: "Kaya Nishikino", src: "songs/song (137).mp3", cover: "covers/cover1.png" },
  { title: "Song 138", artist: "Kaya Nishikino", src: "songs/song (138).mp3", cover: "covers/cover1.png" },
  { title: "Song 139", artist: "Kaya Nishikino", src: "songs/song (139).mp3", cover: "covers/cover1.png" },
  { title: "Song 140", artist: "Kaya Nishikino", src: "songs/song (140).mp3", cover: "covers/cover1.png" },
  { title: "Song 141", artist: "Kaya Nishikino", src: "songs/song (141).mp3", cover: "covers/cover1.png" },
  { title: "Song 142", artist: "Kaya Nishikino", src: "songs/song (142).mp3", cover: "covers/cover1.png" },
  { title: "Song 143", artist: "Kaya Nishikino", src: "songs/song (143).mp3", cover: "covers/cover1.png" },
  { title: "Song 144", artist: "Kaya Nishikino", src: "songs/song (144).mp3", cover: "covers/cover1.png" },
  { title: "Song 145", artist: "Kaya Nishikino", src: "songs/song (145).mp3", cover: "covers/cover1.png" },
  { title: "Song 146", artist: "Kaya Nishikino", src: "songs/song (146).mp3", cover: "covers/cover1.png" },
  { title: "Song 147", artist: "Kaya Nishikino", src: "songs/song (147).mp3", cover: "covers/cover1.png" },
  { title: "Song 148", artist: "Kaya Nishikino", src: "songs/song (148).mp3", cover: "covers/cover1.png" },
  { title: "Song 149", artist: "Kaya Nishikino", src: "songs/song (149).mp3", cover: "covers/cover1.png" },
  { title: "Song 150", artist: "Kaya Nishikino", src: "songs/song (150).mp3", cover: "covers/cover1.png" },
  { title: "Song 151", artist: "Kaya Nishikino", src: "songs/song (151).mp3", cover: "covers/cover1.png" },
  { title: "Song 152", artist: "Kaya Nishikino", src: "songs/song (152).mp3", cover: "covers/cover1.png" },
  { title: "Song 153", artist: "Kaya Nishikino", src: "songs/song (153).mp3", cover: "covers/cover1.png" },
  { title: "Song 154", artist: "Kaya Nishikino", src: "songs/song (154).mp3", cover: "covers/cover1.png" },
  { title: "Song 155", artist: "Kaya Nishikino", src: "songs/song (155).mp3", cover: "covers/cover1.png" },
  { title: "Song 156", artist: "Kaya Nishikino", src: "songs/song (156).mp3", cover: "covers/cover1.png" },
  { title: "Song 157", artist: "Kaya Nishikino", src: "songs/song (157).mp3", cover: "covers/cover1.png" },
  { title: "Song 158", artist: "Kaya Nishikino", src: "songs/song (158).mp3", cover: "covers/cover1.png" },
  { title: "Song 159", artist: "Kaya Nishikino", src: "songs/song (159).mp3", cover: "covers/cover1.png" },
  { title: "Song 160", artist: "Kaya Nishikino", src: "songs/song (160).mp3", cover: "covers/cover1.png" },
  { title: "Song 161", artist: "Kaya Nishikino", src: "songs/song (161).mp3", cover: "covers/cover1.png" },
  { title: "Song 162", artist: "Kaya Nishikino", src: "songs/song (162).mp3", cover: "covers/cover1.png" },
  { title: "Song 163", artist: "Kaya Nishikino", src: "songs/song (163).mp3", cover: "covers/cover1.png" },
  { title: "Song 164", artist: "Kaya Nishikino", src: "songs/song (164).mp3", cover: "covers/cover1.png" },
  { title: "Song 165", artist: "Kaya Nishikino", src: "songs/song (165).mp3", cover: "covers/cover1.png" },
  { title: "Song 166", artist: "Kaya Nishikino", src: "songs/song (166).mp3", cover: "covers/cover1.png" },
  { title: "Song 167", artist: "Kaya Nishikino", src: "songs/song (167).mp3", cover: "covers/cover1.png" },
  { title: "Song 168", artist: "Kaya Nishikino", src: "songs/song (168).mp3", cover: "covers/cover1.png" },
  { title: "Song 169", artist: "ArtistKaya Nishikino", src: "songs/song (169).mp3", cover: "covers/cover1.png" },
  { title: "Song 170", artist: "Kaya Nishikino", src: "songs/song (170).mp3", cover: "covers/cover1.png" },
  { title: "Song 171", artist: "Kaya Nishikino", src: "songs/song (171).mp3", cover: "covers/cover1.png" },
  { title: "Song 172", artist: "Kaya Nishikino", src: "songs/song (172).mp3", cover: "covers/cover1.png" },
  { title: "Song 173", artist: "Kaya Nishikino", src: "songs/song (173).mp3", cover: "covers/cover1.png" },
  { title: "Song 174", artist: "Kaya Nishikino", src: "songs/song (174).mp3", cover: "covers/cover1.png" },
  { title: "Song 175", artist: "Kaya Nishikino", src: "songs/song (175).mp3", cover: "covers/cover1.png" },
  { title: "Song 176", artist: "Kaya Nishikino", src: "songs/song (176).mp3", cover: "covers/cover1.png" },
  { title: "Song 177", artist: "Kaya Nishikino", src: "songs/song (177).mp3", cover: "covers/cover1.png" },
  { title: "Song 178", artist: "Kaya Nishikino", src: "songs/song (178).mp3", cover: "covers/cover1.png" },
  { title: "Song 179", artist: "Kaya Nishikino", src: "songs/song (179).mp3", cover: "covers/cover1.png" },
  { title: "Song 180", artist: "Kaya Nishikino", src: "songs/song (180).mp3", cover: "covers/cover1.png" },
  { title: "Song 181", artist: "Kaya Nishikino", src: "songs/song (181).mp3", cover: "covers/cover1.png" },
  { title: "Song 182", artist: "Kaya Nishikino", src: "songs/song (182).mp3", cover: "covers/cover1.png" },
  { title: "Song 183", artist: "Kaya Nishikino", src: "songs/song (183).mp3", cover: "covers/cover1.png" },
  { title: "Song 184", artist: "Kaya Nishikino", src: "songs/song (184).mp3", cover: "covers/cover1.png" },
  { title: "Song 185", artist: "Kaya Nishikino", src: "songs/song (185).mp3", cover: "covers/cover1.png" },
  { title: "Song 186", artist: "Kaya Nishikino", src: "songs/song (186).mp3", cover: "covers/cover1.png" },
  { title: "Song 187", artist: "Kaya Nishikino", src: "songs/song (187).mp3", cover: "covers/cover1.png" },
  { title: "Song 188", artist: "Kaya Nishikino", src: "songs/song (188).mp3", cover: "covers/cover1.png" },
  { title: "Song 189", artist: "Kaya Nishikino", src: "songs/song (189).mp3", cover: "covers/cover1.png" },
  { title: "Song 190", artist: "Kaya Nishikino", src: "songs/song (190).mp3", cover: "covers/cover1.png" },
  { title: "Song 191", artist: "Kaya Nishikino", src: "songs/song (191).mp3", cover: "covers/cover1.png" },
  { title: "Song 192", artist: "Kaya Nishikino", src: "songs/song (192).mp3", cover: "covers/cover1.png" },
  { title: "Song 193", artist: "Kaya Nishikino", src: "songs/song (193).mp3", cover: "covers/cover1.png" },
  { title: "Song 194", artist: "Kaya Nishikino", src: "songs/song (194).mp3", cover: "covers/cover1.png" },
  { title: "Song 195", artist: "Kaya Nishikino", src: "songs/song (195).mp3", cover: "covers/cover1.png" },
  { title: "Song 196", artist: "Kaya Nishikino", src: "songs/song (196).mp3", cover: "covers/cover1.png" },
  { title: "Song 197", artist: "Kaya Nishikino", src: "songs/song (197).mp3", cover: "covers/cover1.png" },
  { title: "Song 198", artist: "Kaya Nishikino", src: "songs/song (198).mp3", cover: "covers/cover1.png" },
  { title: "Song 199", artist: "Kaya Nishikino", src: "songs/song (199).mp3", cover: "covers/cover1.png" },
  { title: "Song 200", artist: "Kaya Nishikino", src: "songs/song (200).mp3", cover: "covers/cover1.png" },
  { title: "Song 201", artist: "Kaya Nishikino", src: "songs/song (201).mp3", cover: "covers/cover1.png" },
  { title: "Song 202", artist: "Kaya Nishikino", src: "songs/song (202).mp3", cover: "covers/cover1.png" },
  { title: "Song 203", artist: "Kaya Nishikino", src: "songs/song (203).mp3", cover: "covers/cover1.png" },
  { title: "Song 204", artist: "Kaya Nishikino", src: "songs/song (204).mp3", cover: "covers/cover1.png" },
  { title: "Song 205", artist: "Kaya Nishikino", src: "songs/song (205).mp3", cover: "covers/cover1.png" },
  { title: "Song 206", artist: "Kaya Nishikino", src: "songs/song (206).mp3", cover: "covers/cover1.png" },
  { title: "Song 207", artist: "Kaya Nishikino", src: "songs/song (207).mp3", cover: "covers/cover1.png" },
  { title: "Song 208", artist: "Kaya Nishikino", src: "songs/song (208).mp3", cover: "covers/cover1.png" },
  { title: "Song 209", artist: "Kaya Nishikino", src: "songs/song (209).mp3", cover: "covers/cover1.png" },
  { title: "Song 210", artist: "Kaya Nishikino", src: "songs/song (210).mp3", cover: "covers/cover1.png" },
  { title: "Song 211", artist: "Kaya Nishikino", src: "songs/song (211).mp3", cover: "covers/cover1.png" },
  { title: "Song 212", artist: "Kaya Nishikino", src: "songs/song (212).mp3", cover: "covers/cover1.png" },
  { title: "Song 213", artist: "Kaya Nishikino", src: "songs/song (213).mp3", cover: "covers/cover1.png" }
  // add more songs here
];

// DOM ELEMENTS
const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const disc = document.getElementById("disc");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const shuffleBtn = document.getElementById("shuffle");
const loopBtn = document.getElementById("loop");
const songListEl = document.getElementById("songList");
const volume = document.getElementById("volume");

// VOLUME
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// STATE
let currentSong = 0;
let playing = false;
let shuffle = false;
let loopMode = 0;
let shuffleHistory = []; // tracks history when shuffle is active

// INITIAL BUTTON STATE
shuffleBtn.style.opacity = 0.5; // dimmed
loopBtn.style.opacity = 0.5;    // dimmed

// POPULATE SONG LIST
songs.forEach((song, i) => {
  const li = document.createElement("li");
  li.textContent = song.title + " - " + song.artist;
  li.onclick = () => {
    currentSong = i;
    loadSong(currentSong);
    audio.play();                 // start playback
    playing = true;               // update state
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>'; // update button
    disc.classList.add("spin");   // spin the disc
    updateActiveSong();
  };
  songListEl.appendChild(li);
});

function updateActiveSong() {
  document.querySelectorAll(".song-list li").forEach((li, i) => {
    li.classList.toggle("active", i === currentSong);
  });
}

// LOAD SONG
function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.currentTime = 0;
  progress.value = 0;
  updateActiveSong();
}

// PLAY / PAUSE
function togglePlay() {
  if (playing) {
    audio.pause();
    playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
    disc.classList.remove("spin");
  } else {
    audio.play();
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    disc.classList.add("spin");
  }
  playing = !playing;
}

// NEXT / PREV
function nextSong() {
  if (shuffle) {
    shuffleHistory.push(currentSong); // store current song in history
    currentSong = Math.floor(Math.random() * songs.length);
  } else {
    currentSong = (currentSong + 1) % songs.length;
  }
  loadSong(currentSong);
  audio.play();
  playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  disc.classList.add("spin");
  playing = true;
}

function prevSong() {
  if (shuffle && shuffleHistory.length > 0) {
    currentSong = shuffleHistory.pop(); // go back to last played song
  } else {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
  }
  loadSong(currentSong);
  audio.play();
  playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  disc.classList.add("spin");
  playing = true;
}

// SHUFFLE BUTTON
shuffleBtn.onclick = () => { 
  shuffle = !shuffle; 
  shuffleBtn.style.opacity = shuffle ? 1 : 0.5; 
  if (!shuffle) shuffleHistory = []; // clear history if turning off shuffle
};

// TIMELINE
function formatTime(sec) {
  let m = Math.floor(sec / 60);
  let s = Math.floor(sec % 60);
  if (s < 10) s = "0" + s;
  return `${m}:${s}`;
}

// EVENTS
playPause.onclick = togglePlay;
nextBtn.onclick = nextSong;
prevBtn.onclick = prevSong;
shuffleBtn.onclick = () => { shuffle = !shuffle; shuffleBtn.style.opacity = shuffle ? 1 : 0.5; };
// LOOP BUTTON
loopBtn.onclick = () => {
  loopMode = (loopMode + 1) % 3;
  audio.loop = loopMode === 2;
  loopBtn.classList.remove("repeat-all","repeat-one");
  if (loopMode === 0) loopBtn.style.opacity = 0.5;
  else if (loopMode === 1) { loopBtn.style.opacity = 1; loopBtn.classList.add("repeat-all"); }
  else if (loopMode === 2) { loopBtn.style.opacity = 1; loopBtn.classList.add("repeat-one"); }
};

audio.addEventListener("loadedmetadata", () => { duration.textContent = formatTime(audio.duration); });
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
  current.textContent = formatTime(audio.currentTime);
  updateSliderBackground();
});
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
  updateSliderBackground();
});
audio.addEventListener("ended", () => { if(loopMode===2) audio.play(); else nextSong(); });

function updateSliderBackground() {
  const percent = (audio.currentTime / audio.duration) * 100 || 0;
  progress.style.background = `linear-gradient(to right, #FED76B 0%, #FED76B ${percent}%, #382D2D ${percent}%, #382D2D 100%)`;
}

// INITIALIZE
loadSong(currentSong);

// PARTICLE BACKGROUND
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 80;

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor(){ this.reset(); }
  reset(){ 
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 5 + 2; // 2–7 px
    this.speedX = (Math.random()-0.5)*0.5;
    this.speedY = (Math.random()-0.5)*0.5;
    this.color = `rgba(255, 251, 244, ${Math.random() * 0.8 + 0.2})`;
  }
  update(){ this.x+=this.speedX; this.y+=this.speedY; }
  draw(){ ctx.beginPath(); ctx.arc(this.x,this.y,this.radius,0,Math.PI*2); ctx.fillStyle=this.color; ctx.fill(); }
}

for(let i=0;i<particleCount;i++)particles.push(new Particle());

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let p of particles){ p.update(); p.draw(); }
  requestAnimationFrame(animate);
}
animate();
