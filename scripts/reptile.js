const puppetter = require("puppetter")
    
    let data=[
        {
            "title": "第一章  百鬼夜行",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=0"
        },
        {
            "title": "第二章  火将军",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=1"
        },
        {
            "title": "第三章 地狱道",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=2"
        },
        {
            "title": "第四章 锁心链",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=3"
        },
        {
            "title": "第五章 暴雨梨花",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=4"
        },
        {
            "title": "第六章 入侵者",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=5"
        },
        {
            "title": "第七章 背水之战",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=6"
        },
        {
            "title": "番外篇 太初天地离火柱（上）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=7"
        },
        {
            "title": "番外篇 （中）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=8"
        },
        {
            "title": "番外篇  下",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=9"
        },
        {
            "title": "第八章 清风化煞",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=10"
        },
        {
            "title": "第九章 破竹之势",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=11"
        },
        {
            "title": "第十章 风起云涌",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=12"
        },
        {
            "title": "第十一章 四方真如",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=13"
        },
        {
            "title": "第十二章 榆槐桃桑",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=14"
        },
        {
            "title": "第十三章 武神躯",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=15"
        },
        {
            "title": "第十四章 唯我独尊",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=16"
        },
        {
            "title": "第十五章 四面楚歌",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=17"
        },
        {
            "title": "第十六章 堕落天使",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=18"
        },
        {
            "title": "第十七章 启程",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=19"
        },
        {
            "title": "第十八章 菩提世界",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=20"
        },
        {
            "title": "第十九章 不速之客（上）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=21"
        },
        {
            "title": "第十九章 （下）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=22"
        },
        {
            "title": "第二十章 暮夜怀金",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=23"
        },
        {
            "title": "二十一章 两个怪物",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=24"
        },
        {
            "title": "二十二章 无相火皇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=25"
        },
        {
            "title": "二十三章 意外",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=26"
        },
        {
            "title": "二十四章 如狼似虎",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=27"
        },
        {
            "title": "二十五章 鱼游釜中",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=28"
        },
        {
            "title": "二十六章 穷途末路",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=29"
        },
        {
            "title": "二十七章 云起龙骧",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=30"
        },
        {
            "title": "二十八章 虎贲双雄",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=31"
        },
        {
            "title": "二十九章 魂牵梦萦",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=32"
        },
        {
            "title": "三十章 清尘浊水",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=33"
        },
        {
            "title": "三十一章 以心传心",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=34"
        },
        {
            "title": "三十二章 剑树刀山",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=35"
        },
        {
            "title": "三十三章 断罪邪铃",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=36"
        },
        {
            "title": "三十四章 力挽狂澜",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=37"
        },
        {
            "title": "三十五章 曹魔王",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=38"
        },
        {
            "title": "三十六章 以血洗血",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=39"
        },
        {
            "title": "三十七章 两个霸王",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=40"
        },
        {
            "title": "三十八章 寸木岑楼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=41"
        },
        {
            "title": "三十九章 深不可测",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=42"
        },
        {
            "title": "四十章 转日回天",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=43"
        },
        {
            "title": "四十一章 出敌意外（上）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=44"
        },
        {
            "title": "四十一章（下）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=45"
        },
        {
            "title": "四十二章 暗藏杀机",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=46"
        },
        {
            "title": "四十三章 天地玄黄",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=47"
        },
        {
            "title": "四十四章 长风破浪",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=48"
        },
        {
            "title": "四十五章 气贯长虹",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=49"
        },
        {
            "title": "四十六章 浮生若梦",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=50"
        },
        {
            "title": "四十七章 我是传说",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=51"
        },
        {
            "title": "第二部  前奏",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=52"
        },
        {
            "title": "四十八 破晓",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=53"
        },
        {
            "title": "四十九 狩猎",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=54"
        },
        {
            "title": "五十 迷香",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=55"
        },
        {
            "title": "五十一 虫袭",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=56"
        },
        {
            "title": "五十二 疾风",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=57"
        },
        {
            "title": "五十三 焚寂",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=58"
        },
        {
            "title": "五十四 焚寂（下）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=59"
        },
        {
            "title": "五十五 幻楼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=60"
        },
        {
            "title": "五十六 路障",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=61"
        },
        {
            "title": "五十七 烽火",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=62"
        },
        {
            "title": "五十八 破甲",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=63"
        },
        {
            "title": "五十九 荆棘",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=64"
        },
        {
            "title": "六十 风刃",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=65"
        },
        {
            "title": "六十一 迷城",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=66"
        },
        {
            "title": "六十二 飞雪",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=67"
        },
        {
            "title": "六十三 交易",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=68"
        },
        {
            "title": "六十四 花海",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=69"
        },
        {
            "title": "六十五 沙城",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=70"
        },
        {
            "title": "六十六 联合",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=71"
        },
        {
            "title": "六十七 追忆",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=72"
        },
        {
            "title": "六十八 霜白",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=73"
        },
        {
            "title": "六十九 燎原",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=74"
        },
        {
            "title": "七十 白焰",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=75"
        },
        {
            "title": "七十一 破冰",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=76"
        },
        {
            "title": "七十二 斩首",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=77"
        },
        {
            "title": "七十三 摧城",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=78"
        },
        {
            "title": "董卓现身！放开那三国番外",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=79"
        },
        {
            "title": "七十四 花毒（上）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=80"
        },
        {
            "title": "七十五 花毒（下）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=81"
        },
        {
            "title": "七十六 门神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=82"
        },
        {
            "title": "七十七 觉醒",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=83"
        },
        {
            "title": "七十八 傀儡",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=84"
        },
        {
            "title": "七十九 化虎",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=85"
        },
        {
            "title": "八十 风爆",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=86"
        },
        {
            "title": "八十一 梦魇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=87"
        },
        {
            "title": "八十二 救兵",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=88"
        },
        {
            "title": "八十三 迎战",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=89"
        },
        {
            "title": "八十四 内战",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=90"
        },
        {
            "title": "八十五 困境",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=91"
        },
        {
            "title": "八十六 炼狱",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=92"
        },
        {
            "title": "八十七 皇牌",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=93"
        },
        {
            "title": "八十八 交火",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=94"
        },
        {
            "title": "八十九 钥匙",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=95"
        },
        {
            "title": "九十 交换",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=96"
        },
        {
            "title": "九十一 觉醒",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=97"
        },
        {
            "title": "九十二 月光",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=98"
        },
        {
            "title": "九十三 舍身",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=99"
        },
        {
            "title": "九十四 破绽",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=100"
        },
        {
            "title": "九十五 随风",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=101"
        },
        {
            "title": "九十六 黄雀",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=102"
        },
        {
            "title": "九十七 秘境",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=103"
        },
        {
            "title": "九十八 利刃",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=104"
        },
        {
            "title": "九十九 魔躯",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=105"
        },
        {
            "title": "一百 破茧",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=106"
        },
        {
            "title": "一百零一 鬼斩",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=107"
        },
        {
            "title": "一百零二 伙伴",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=108"
        },
        {
            "title": "一百零三 出口",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=109"
        },
        {
            "title": "一百零四 千年",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=110"
        },
        {
            "title": "特别篇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=111"
        },
        {
            "title": "一百零五 神秘人",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=112"
        },
        {
            "title": "一百零六 水云街",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=113"
        },
        {
            "title": "一百零七 罪与罚",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=114"
        },
        {
            "title": "一百零八 忘川云",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=115"
        },
        {
            "title": "一百零九 不归路",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=116"
        },
        {
            "title": "一百一十 南无地",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=117"
        },
        {
            "title": "一百一十一 交易所",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=118"
        },
        {
            "title": "一百一十二 敌和友",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=119"
        },
        {
            "title": "一百一十三 目的地",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=120"
        },
        {
            "title": "一百一十四 燃灯寺",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=121"
        },
        {
            "title": "一百一十五 斗兽赛",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=122"
        },
        {
            "title": "一百一十六 躲猫猫",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=123"
        },
        {
            "title": "一百一十七 新决策",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=124"
        },
        {
            "title": "一百一十八 蛇与鼬",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=125"
        },
        {
            "title": "一百一十九 收藏屋",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=126"
        },
        {
            "title": "一百二十 大发现",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=127"
        },
        {
            "title": "一百二十一 妖王兽",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=128"
        },
        {
            "title": "一百二十二 无日渊",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=129"
        },
        {
            "title": "番外",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=130"
        },
        {
            "title": "一百二十三 库拉肯",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=131"
        },
        {
            "title": "一百二十四 大反攻",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=132"
        },
        {
            "title": "一百二十五 神风扇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=133"
        },
        {
            "title": "一百二十六 虎霸王",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=134"
        },
        {
            "title": "一百二十七 老朋友",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=135"
        },
        {
            "title": "一百二十八 无明宫",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=136"
        },
        {
            "title": "一百二十九 天武街",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=137"
        },
        {
            "title": "一百三十 另一面",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=138"
        },
        {
            "title": "一百三十一 刹鬼心",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=139"
        },
        {
            "title": "一百三十二 硬碰硬",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=140"
        },
        {
            "title": "一百三十三 白土地",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=141"
        },
        {
            "title": "一百三十四 大乱战",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=142"
        },
        {
            "title": "一百三十五 恶与恶",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=143"
        },
        {
            "title": "新年篇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=144"
        },
        {
            "title": "一百三十六 嗜血魔",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=145"
        },
        {
            "title": "一百三十七 大危机",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=146"
        },
        {
            "title": "一百三十八 心世界",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=147"
        },
        {
            "title": "一百三十九 寂灭都",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=148"
        },
        {
            "title": "一百四十 笼与兽",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=149"
        },
        {
            "title": "一百四十一 它是谁",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=150"
        },
        {
            "title": "一百四十二 头与尾",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=151"
        },
        {
            "title": "一百四十三 杀人影",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=152"
        },
        {
            "title": "一百四十四 邪灵帝",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=153"
        },
        {
            "title": "一百四十五 杀手锏",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=154"
        },
        {
            "title": "一百四十六 控影师",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=155"
        },
        {
            "title": "一百四十七 修道院",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=156"
        },
        {
            "title": "一百四十八 捣蛋鬼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=157"
        },
        {
            "title": "一百四十九 玛利亚",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=158"
        },
        {
            "title": "一百五十 星月夜",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=159"
        },
        {
            "title": "一百五十一 平安夜",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=160"
        },
        {
            "title": "一百五十二 我是魔",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=161"
        },
        {
            "title": "一百五十三 安魂曲",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=162"
        },
        {
            "title": "一百五十四 斩魔镰",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=163"
        },
        {
            "title": "一百五十五 独行侠",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=164"
        },
        {
            "title": "一百五十六 天使心",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=165"
        },
        {
            "title": "一百五十七 咏唱者",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=166"
        },
        {
            "title": "一百五十八 你来了",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=167"
        },
        {
            "title": "一百五十九 大铁锤",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=168"
        },
        {
            "title": "一百六十 鬼战神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=169"
        },
        {
            "title": "一百六十一 我的路",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=170"
        },
        {
            "title": "一百六十二 暴风雨",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=171"
        },
        {
            "title": "番外篇  曹玄亮01",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=172"
        },
        {
            "title": "曹玄亮02",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=173"
        },
        {
            "title": "曹玄亮03",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=174"
        },
        {
            "title": "曹玄亮04",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=175"
        },
        {
            "title": "一百六十三 会议",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=176"
        },
        {
            "title": "一百六十四 铁牢",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=177"
        },
        {
            "title": "一百六十五 天佑",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=178"
        },
        {
            "title": "一百六十六 奇门",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=179"
        },
        {
            "title": "一百六十七 排盘",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=180"
        },
        {
            "title": "一百六十八 化煞",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=181"
        },
        {
            "title": "一百六十九 神怒",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=182"
        },
        {
            "title": "一百七十 计划",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=183"
        },
        {
            "title": "一百七十一 线索",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=184"
        },
        {
            "title": "一百七十二 镇狱",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=185"
        },
        {
            "title": "一百七十三 变动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=186"
        },
        {
            "title": "一百七十四 秘密",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=187"
        },
        {
            "title": "一百七十五 转机",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=188"
        },
        {
            "title": "一百七十六 线索",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=189"
        },
        {
            "title": "一百七十七 成员",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=190"
        },
        {
            "title": "一百七十八 真相",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=191"
        },
        {
            "title": "一百七十九 天眼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=192"
        },
        {
            "title": "一百八十 魔障",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=193"
        },
        {
            "title": "一百八十一 无心",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=194"
        },
        {
            "title": "一百八十二 守护",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=195"
        },
        {
            "title": "一百八十三 回天",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=196"
        },
        {
            "title": "一百八十四 信念",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=197"
        },
        {
            "title": "一百八十五 黑影",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=198"
        },
        {
            "title": "一百八十六 克星",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=199"
        },
        {
            "title": "一百八十七 胜败",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=200"
        },
        {
            "title": "一百八十八 越狱",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=201"
        },
        {
            "title": "一百八十九 飞将",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=202"
        },
        {
            "title": "一百九十 单挑",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=203"
        },
        {
            "title": "一九一 受困",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=204"
        },
        {
            "title": "一九二 铁戟",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=205"
        },
        {
            "title": "一九三 战士",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=206"
        },
        {
            "title": "一九四 白热",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=207"
        },
        {
            "title": "一九五 救兵",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=208"
        },
        {
            "title": "一九六 獠牙",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=209"
        },
        {
            "title": "一九七 拦截",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=210"
        },
        {
            "title": "一九八 帮手",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=211"
        },
        {
            "title": "一九九 赌局",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=212"
        },
        {
            "title": "两百 勇者",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=213"
        },
        {
            "title": "二零一 英雄",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=214"
        },
        {
            "title": "二零二 巾帼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=215"
        },
        {
            "title": "特别篇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=216"
        },
        {
            "title": "二零三 撤退",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=217"
        },
        {
            "title": "二零四 冲击",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=218"
        },
        {
            "title": "二零五 铁拳",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=219"
        },
        {
            "title": "二零六 武神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=220"
        },
        {
            "title": "二零七 凯歌",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=221"
        },
        {
            "title": "二零八 五虎",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=222"
        },
        {
            "title": "二零九 归来",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=223"
        },
        {
            "title": "二百一 秘密",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=224"
        },
        {
            "title": "二一一 选择",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=225"
        },
        {
            "title": "番外篇 神秘的任务（上）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=226"
        },
        {
            "title": "番外篇 神秘的任务（下）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=227"
        },
        {
            "title": "二一二 决心",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=228"
        },
        {
            "title": "二一三 龙胆",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=229"
        },
        {
            "title": "二一四 集结",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=230"
        },
        {
            "title": "这是一条广告",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=231"
        },
        {
            "title": "二一五 行动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=232"
        },
        {
            "title": "二一六 银甲",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=233"
        },
        {
            "title": "二一七 寂静",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=234"
        },
        {
            "title": "二一八 闯阵",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=235"
        },
        {
            "title": "二一九 吞影",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=236"
        },
        {
            "title": "《少年三国志》联动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=237"
        },
        {
            "title": "二二零 山林",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=238"
        },
        {
            "title": "二二一  魔人",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=239"
        },
        {
            "title": "二二二 兄弟",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=240"
        },
        {
            "title": "二二三 反击",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=241"
        },
        {
            "title": "二二四 谋士",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=242"
        },
        {
            "title": "二二五 残爪",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=243"
        },
        {
            "title": "二二六 接替",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=244"
        },
        {
            "title": "二二七 霸王",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=245"
        },
        {
            "title": "二二八 不灭",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=246"
        },
        {
            "title": "二二九 巨兽",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=247"
        },
        {
            "title": "二三零 集结",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=248"
        },
        {
            "title": "二三一 破坏",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=249"
        },
        {
            "title": "300英雄联动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=250"
        },
        {
            "title": "二三二 化兽",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=251"
        },
        {
            "title": "二三三 鬼王",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=252"
        },
        {
            "title": "二三四 齐力",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=253"
        },
        {
            "title": "二三五 预言",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=254"
        },
        {
            "title": "二三六 交涉",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=255"
        },
        {
            "title": "二三七 决心",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=256"
        },
        {
            "title": "二三八 入侵",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=257"
        },
        {
            "title": "二三九 雷鸣",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=258"
        },
        {
            "title": "二四零 双剑",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=259"
        },
        {
            "title": "二四一 炎魔",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=260"
        },
        {
            "title": "二四二 挑战",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=261"
        },
        {
            "title": "二四三 密室",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=262"
        },
        {
            "title": "二四四 国王",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=263"
        },
        {
            "title": "二四五 蝴蝶",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=264"
        },
        {
            "title": "二四六 两面",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=265"
        },
        {
            "title": "二四七 伯爵",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=266"
        },
        {
            "title": "二四八 斗法",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=267"
        },
        {
            "title": "二四九 赤魔",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=268"
        },
        {
            "title": "二五零  斩妖",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=269"
        },
        {
            "title": "必胜客榴莲三杰比萨",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=270"
        },
        {
            "title": "二五一 龙枪",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=271"
        },
        {
            "title": "二五二 神感",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=272"
        },
        {
            "title": "二五三 身体",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=273"
        },
        {
            "title": "二五四 天兵",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=274"
        },
        {
            "title": "英魂之刃联动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=275"
        },
        {
            "title": "二五五 复仇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=276"
        },
        {
            "title": "二五六 天雷",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=277"
        },
        {
            "title": "二五七 激斗",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=278"
        },
        {
            "title": "二五八 猛虎",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=279"
        },
        {
            "title": "二五九 雷帝",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=280"
        },
        {
            "title": "天谕联动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=281"
        },
        {
            "title": "二六零 战意",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=282"
        },
        {
            "title": "二六一 神罚",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=283"
        },
        {
            "title": "二六二 藏龙",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=284"
        },
        {
            "title": "二六三 封印",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=285"
        },
        {
            "title": "二六四 斩天",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=286"
        },
        {
            "title": "二六五 翅膀",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=287"
        },
        {
            "title": "二六六 阵雨",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=288"
        },
        {
            "title": "二六七 灵魂",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=289"
        },
        {
            "title": "二六八 工具",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=290"
        },
        {
            "title": "二六九 苏醒",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=291"
        },
        {
            "title": "二七零 进食",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=292"
        },
        {
            "title": "二七一 自由",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=293"
        },
        {
            "title": "二七二 合作",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=294"
        },
        {
            "title": "二七三 要塞",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=295"
        },
        {
            "title": "二七四 傀儡",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=296"
        },
        {
            "title": "二七五 杀意",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=297"
        },
        {
            "title": "二七六 恶虎",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=298"
        },
        {
            "title": "二七七 金刚",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=299"
        },
        {
            "title": "二七八 隐秘",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=300"
        },
        {
            "title": "二七九 见面",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=301"
        },
        {
            "title": "二八零 困难",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=302"
        },
        {
            "title": "二八一 剑蝶",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=303"
        },
        {
            "title": "二八二 迷宫",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=304"
        },
        {
            "title": "二八三 剑神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=305"
        },
        {
            "title": "二八四 海神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=306"
        },
        {
            "title": "二八五 心结",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=307"
        },
        {
            "title": "二八六 相逢",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=308"
        },
        {
            "title": "二八七 酒局",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=309"
        },
        {
            "title": "二八八 交易",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=310"
        },
        {
            "title": "二八九 龙核",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=311"
        },
        {
            "title": "二九零 火王",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=312"
        },
        {
            "title": "二九一 出口",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=313"
        },
        {
            "title": "二九二 怒火",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=314"
        },
        {
            "title": "二九三 决斗",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=315"
        },
        {
            "title": "二九四 决斗（二）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=316"
        },
        {
            "title": "二九五 决斗（三）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=317"
        },
        {
            "title": "二九六 决斗（四）",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=318"
        },
        {
            "title": "二九七 破壁",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=319"
        },
        {
            "title": "二九八 立场",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=320"
        },
        {
            "title": "二九九 心魔",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=321"
        },
        {
            "title": "三百 复仇",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=322"
        },
        {
            "title": "三零一 剑魂",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=323"
        },
        {
            "title": "三零二 虎穴",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=324"
        },
        {
            "title": "三零三 化龙",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=325"
        },
        {
            "title": "三零四 穿云",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=326"
        },
        {
            "title": "三零五 王国",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=327"
        },
        {
            "title": "三零六 黎明",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=328"
        },
        {
            "title": "三零七 战后",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=329"
        },
        {
            "title": "三零八 保护",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=330"
        },
        {
            "title": "三零九 重聚",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=331"
        },
        {
            "title": "三一零 过去",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=332"
        },
        {
            "title": "三一一 修行",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=333"
        },
        {
            "title": "三一二 任务",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=334"
        },
        {
            "title": "三一三 禁忌",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=335"
        },
        {
            "title": "三一四 试练",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=336"
        },
        {
            "title": "三一五 行动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=337"
        },
        {
            "title": "三一六 面具",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=338"
        },
        {
            "title": "三一七 约期",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=339"
        },
        {
            "title": "三一八 雨声",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=340"
        },
        {
            "title": "三一九 谎言",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=341"
        },
        {
            "title": "三二零 门徒",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=342"
        },
        {
            "title": "三二一 涌动",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=343"
        },
        {
            "title": "三二二 请神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=344"
        },
        {
            "title": "三二三 光影",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=345"
        },
        {
            "title": "三二四 归来",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=346"
        },
        {
            "title": "三二五 酒宴",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=347"
        },
        {
            "title": "三二六 冥将",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=348"
        },
        {
            "title": "三二七 火海",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=349"
        },
        {
            "title": "三二八 破坏",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=350"
        },
        {
            "title": "三二九 武器",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=351"
        },
        {
            "title": "三三零 转轮",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=352"
        },
        {
            "title": "三三一 火牢",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=353"
        },
        {
            "title": "三三二 胜负",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=354"
        },
        {
            "title": "三三三 缺口",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=355"
        },
        {
            "title": "三三四 蛟龙",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=356"
        },
        {
            "title": "三三五 雨人",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=357"
        },
        {
            "title": "三三六 誓言",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=358"
        },
        {
            "title": "三三七 冥海",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=359"
        },
        {
            "title": "三三八 祸斗",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=360"
        },
        {
            "title": "三三九 刀魔",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=361"
        },
        {
            "title": "三四零 海岸",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=362"
        },
        {
            "title": "三四一 手臂",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=363"
        },
        {
            "title": "三四二 旅途",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=364"
        },
        {
            "title": "三四三 回归",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=365"
        },
        {
            "title": "三四四 变天",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=366"
        },
        {
            "title": "三四五 对话",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=367"
        },
        {
            "title": "三四六 攻城",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=368"
        },
        {
            "title": "三四七 突袭",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=369"
        },
        {
            "title": "三四八 王朝",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=370"
        },
        {
            "title": "三四九 余火",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=371"
        },
        {
            "title": "三五零 帮手",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=372"
        },
        {
            "title": "三五一 对立",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=373"
        },
        {
            "title": "三五二 树心",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=374"
        },
        {
            "title": "三五三 助阵",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=375"
        },
        {
            "title": "三五四 天狼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=376"
        },
        {
            "title": "三五五 美梦",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=377"
        },
        {
            "title": "三五六 聚集",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=378"
        },
        {
            "title": "三五七 开花",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=379"
        },
        {
            "title": "三五八 狭路",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=380"
        },
        {
            "title": "三五九 烈将",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=381"
        },
        {
            "title": "三六零 树洞",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=382"
        },
        {
            "title": "三六一 象马",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=383"
        },
        {
            "title": "三六二 赤狐",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=384"
        },
        {
            "title": "三六三 杀帝",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=385"
        },
        {
            "title": "三六四 大将",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=386"
        },
        {
            "title": "三六五 雪象",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=387"
        },
        {
            "title": "三六六 金翅",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=388"
        },
        {
            "title": "三六七 战神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=389"
        },
        {
            "title": "三六八 神威",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=390"
        },
        {
            "title": "三六九 瞬杀",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=391"
        },
        {
            "title": "三七零 身份",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=392"
        },
        {
            "title": "三七一 本面",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=393"
        },
        {
            "title": "三七二 通道",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=394"
        },
        {
            "title": "三七三 迷境",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=395"
        },
        {
            "title": "三七四 命运",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=396"
        },
        {
            "title": "三七五 海滩",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=397"
        },
        {
            "title": "三七六 谜团",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=398"
        },
        {
            "title": "三七七 牢笼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=399"
        },
        {
            "title": "三七八 困兽",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=400"
        },
        {
            "title": "三七九 交锋",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=401"
        },
        {
            "title": "三八零 三体",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=402"
        },
        {
            "title": "三八一 面具",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=403"
        },
        {
            "title": "三八二 碰面",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=404"
        },
        {
            "title": "三八三 红龙",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=405"
        },
        {
            "title": "三八四 珍物",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=406"
        },
        {
            "title": "三八五 时间",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=407"
        },
        {
            "title": "三八六 相识",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=408"
        },
        {
            "title": "三八七 约定",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=409"
        },
        {
            "title": "三八八 兵营",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=410"
        },
        {
            "title": "三八九 动荡",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=411"
        },
        {
            "title": "三九零 梦境",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=412"
        },
        {
            "title": "三九一 见面",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=413"
        },
        {
            "title": "三九二 对话",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=414"
        },
        {
            "title": "三九三 裂痕",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=415"
        },
        {
            "title": "三九四 后手",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=416"
        },
        {
            "title": "三九五 冒险",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=417"
        },
        {
            "title": "三九六 夜衣",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=418"
        },
        {
            "title": "三九七 黑楼",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=419"
        },
        {
            "title": "三九八 黄泉",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=420"
        },
        {
            "title": "三九九 突袭",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=421"
        },
        {
            "title": "四百 陨神",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=422"
        },
        {
            "title": "四零一 出路",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=423"
        },
        {
            "title": "四零二 冲突",
            "href": "https://cn.baozimh.com/user/page_direct?comic_id=zhenhunjie-xuchen&section_slot=0&chapter_slot=424"
        }
    ]

(async ()=>{
    const browser = await puppeteer.launch({
    
    });
    const page = await browser.newPage();
    
    // Navigate the page to a URL
    await page.goto('https://cn.baozimh.com/comic/zhenhunjie-xuchen');
    
    // Set screen size
    await page.setViewport({width: 1920, height: 1080});
    
    // Type into search box
    await page.type('.search-box__input', 'automate beyond recorder');
    
    // Wait and click on first result
    const searchResultSelector = '.search-box__link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
    
    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
        'text/Customize and automate'
    );
    const fullTitle = await textSelector?.evaluate(el => el.textContent);
    
    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);
    
    // await browser.close();
})()
