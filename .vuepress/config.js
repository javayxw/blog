module.exports = {
    "title": "﹏染指ぃ年華",
    "description": "眸中揉进了山海诗篇与万家烛光，在夏季梅子味的晚风中轻轻晕染，织成旖旎幻梦",
    "dest": "dist",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "https://pic.imgdb.cn/item/63e635c64757feff337ea914.webp"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
    ],
    "locales": {
        "/": {
            "lang": 'zh-CN'
        }
    },
    // "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "关于",
                "link": "/about/",
                "icon": "reco-account"
            }
        ],
        "type": "blog",
        "sidebar": 'auto',
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "博客"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "valineConfig": {
            "appId": "xxx",// your appId
            "appKey": "xxx", // your appKey
            "avatar": "", //
            "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
            "requiredFields": ['nick', 'mail'], //设置必填项
        },
        "logo": "/logo.png",
        // "huawei": true, //首页出现华为文案
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "﹏染指ぃ年華",
        "authorAvatar": "https://pic.imgdb.cn/item/63e631ce4757feff3375a622.gif",
        "record": "你的备案号 ", //icp备案
        "startYear": "2023",
        "info": "'留得枯荷听雨声'。在轻丝浮荡的梅雨时节，静坐于茶楼之上，神情认真，专注于面前程序。闲暇时，盛一盏竹叶青，临窗观雨。看轻柔的雨丝覆上四百八十座楼台，看桃花在雨帘中缓缓下坠，落红成阵，漾出世间最美的诗行。" +
            "不觉中，两名怀梦而战的准程序员，又将用代码谱写出怎样的诗篇！",
        "mottos": [{
            "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
            "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
        },
            {
                "zh": "年轻就是无限的可能。",
                "en": "Youth means limitless possibilities."
            },
            {
                "zh": "真正的梦就是现实的彼岸。",
                "en": "Real dream is the other shore of reality."
            },
            {
                "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
                "en": "Don't worry about the vague future, just strive for the clear present."
            },
            {
                "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
                "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
            }, {
                "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
                "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
            },
            {
                "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
                "en": "Life without regret, we can only do our best to not to regret."
            }
        ],
        "covers": [
            'https://pic.imgdb.cn/item/641969b3a682492fcc39f11e.jpg',
            'https://pic.imgdb.cn/item/641969b4a682492fcc39f184.jpg',
            'https://pic.imgdb.cn/item/64197062a682492fcc47702b.jpg',
            'https://pic.imgdb.cn/item/641969eea682492fcc3a501f.jpg',
            'https://pic.imgdb.cn/item/641969efa682492fcc3a513d.jpg',
            'https://pic.imgdb.cn/item/641969f0a682492fcc3a5368.jpg',
            'https://pic.imgdb.cn/item/641969f1a682492fcc3a54f4.jpg'
        ],
        "codeTheme": "funky"
    },
    "markdown": {
        "lineNumbers": false
    },
    plugins: [
        ['@vuepress-reco/vuepress-plugin-pagation', {
            perPage: 8
        }],
        [
            require('./plugins/BgMusic'),
            {
                audios: [
                    {
                        name: '我再没见过 像你一般的星空',
                        artist: 'Seto',
                        url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
                    },
                    {
                        name: '萤火之森',
                        artist: 'CMJ',
                        url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
                    }
                ]
            }
        ],
        ["sakura", {
            num: 10,  // 默认数量
            show: true,
            zIndex: 2,
            img: {
                replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: 'https://www.zpzpup.com/assets/image/sakura.png'     // 绝对路径
            }
        }],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功"
            }
        }],
        [
            "dynamic-title",
            {
                showIcon: "https://pic.imgdb.cn/item/63e635c64757feff337ea914.webp",
                showText: "欢迎回来 O(∩_∩)O~",
                hideIcon: "https://pic.imgdb.cn/item/63e635c64757feff337ea914.webp",
                hideText: "失联中。。。快回来~",
                recoverTime: 2000
            }
        ],
    ]
    // configureWebpack: (config, isServer) => {
    //   if (!isServer) {
    //     // 修改客户端的 webpack 配置
    //     config.output.publicPath = config.mode === 'production'
    //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
    //       : '/';
    //     config.output.filename = "assets/js/[name].js";
    //   }
    // }
}