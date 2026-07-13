const philosophers = {
    ethicsgram: {
        name: 'EthicsGram',
        handle: '@ethicsgram',
        bio: '📚 Philosophy meets ESG\n윤리 사상으로 바라본 지속가능한 K-POP 산업',
        avatar: 'E',
        posts: 4,
        followers: '118k',
        following: 4,
        verified: false
    },
    kant: {
        name: '칸트',
        handle: '@immanuel_kant',
        bio: '"인간은 언제나 목적이다."',
        avatar: 'K',
        posts: 12,
        followers: '315k',
        following: 0,
        verified: true
    },
    adorno: {
        name: '아도르노',
        handle: '@adorno_critical',
        bio: '"문화를 소비하지 말고 성찰하라."',
        avatar: 'A',
        posts: 28,
        followers: '247k',
        following: 0,
        verified: false
    },
    wilde: {
        name: '오스카 와일드',
        handle: '@oscar_wilde',
        bio: '"모든 예술은 아름다워야 한다."',
        avatar: 'W',
        posts: 35,
        followers: '402k',
        following: 0,
        verified: false
    },
    kong: {
        name: '공자',
        handle: '@master_kong',
        bio: '"절제는 최고의 미덕이다."',
        avatar: 'C',
        posts: 45,
        followers: '513k',
        following: 0,
        verified: false
    }
};

const posts = [
    {
        id: 1,
        author: philosophers.ethicsgram,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3E수백 장의 버려진 K-POP 앨범%3C/text%3E%3C/svg%3E',
        caption: '🎵 앨범을 여러 버전으로 출시하는 전략. 팬들은 원하는 포토카드를 얻기 위해 여러 장의 앨범을 구매합니다. 하지만 ESG 경영을 실천하는 기업이라면 이러한 판매 방식은 계속 유지되어도 괜찮을까요? 여러분의 생각은?\n\n#ESG #KPOP #지속가능성',
        likes: 2183,
        liked: false,
        saved: false,
        timestamp: '2시간 전',
        comments: [
            {
                id: 'c1-1',
                author: philosophers.kant,
                text: '소비자를 반복 구매의 수단으로만 대하는 판매 전략이라면 인간의 존엄을 충분히 존중한다고 보기 어렵습니다.',
                likes: 947,
                timestamp: '2시간',
                replies: [
                    {
                        author: philosophers.kong,
                        text: '절제는 소비자의 덕목이기도 하지만 먼저 기업이 인간을 존중하는 구조를 만드는 것이 중요합니다.',
                        likes: 320
                    },
                    {
                        author: philosophers.adorno,
                        text: '그 구조 자체가 자본주의 문화산업의 문제입니다.',
                        likes: 281
                    }
                ]
            },
            {
                id: 'c1-2',
                author: philosophers.adorno,
                text: '문화가 상품이 되는 순간 예술은 판매 전략 속에 편입됩니다.',
                likes: 813,
                timestamp: '1시간',
                replies: []
            },
            {
                id: 'c1-3',
                author: philosophers.kong,
                text: '기업도 팬도 절제를 잃지 않을 때 오래 지속될 수 있습니다.',
                likes: 768,
                timestamp: '50분',
                replies: []
            }
        ]
    },
    {
        id: 2,
        author: philosophers.ethicsgram,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23fff0f5" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23c97586" text-anchor="middle" dominant-baseline="middle"%3E랜덤 포토카드%3C/text%3E%3C/svg%3E',
        caption: '포토카드는 팬들에게 즐거움을 줄까요? 아니면 과소비를 유도하는 마케팅일까요?',
        likes: 1856,
        liked: false,
        saved: false,
        timestamp: '4시간 전',
        comments: [
            {
                id: 'c2-1',
                author: philosophers.kant,
                text: '우연성을 이용해 반복 구매를 유도한다면 소비자를 목적으로 대한다고 보기 어렵습니다.',
                likes: 742,
                timestamp: '4시간',
                replies: []
            },
            {
                id: 'c2-2',
                author: philosophers.kong,
                text: '즐거움은 좋지만 지나침은 경계해야 합니다.',
                likes: 629,
                timestamp: '3시간',
                replies: []
            },
            {
                id: 'c2-3',
                author: philosophers.adorno,
                text: '상품을 소비하는 것이 아니라 소비 자체를 소비하게 됩니다.',
                likes: 895,
                timestamp: '2시간',
                replies: []
            },
            {
                id: 'c2-4',
                author: philosophers.wilde,
                text: '예술의 감동보다 포토카드의 희소성이 더 중요해진다면 슬픈 일입니다.',
                likes: 1104,
                timestamp: '1시간',
                replies: [
                    {
                        author: philosophers.wilde,
                        text: '팬은 음악보다 상품을 먼저 기다리게 됩니다.',
                        likes: 634
                    },
                    {
                        author: philosophers.adorno,
                        text: '그것이 바로 문화산업입니다.',
                        likes: 578
                    },
                    {
                        author: philosophers.kant,
                        text: '예술도 인간도 수단이 되어서는 안 됩니다.',
                        likes: 812
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        author: philosophers.ethicsgram,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f5f0e8" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3E콘서트와 굿즈샵%3C/text%3E%3C/svg%3E',
        caption: '아이돌은 예술가일까요? 아니면 브랜드일까요?',
        likes: 3421,
        liked: false,
        saved: false,
        timestamp: '1일 전',
        comments: [
            {
                id: 'c3-1',
                author: philosophers.wilde,
                text: '예술은 판매량이 아니라 아름다움으로 존재합니다.',
                likes: 1523,
                timestamp: '1일',
                replies: [
                    {
                        author: philosophers.wilde,
                        text: '상업성이 예술을 완전히 지배해서는 안 됩니다.',
                        likes: 892
                    }
                ]
            },
            {
                id: 'c3-2',
                author: philosophers.adorno,
                text: '자본은 예술마저 상품으로 만듭니다.',
                likes: 1387,
                timestamp: '23시간',
                replies: [
                    {
                        author: philosophers.adorno,
                        text: '하지만 자본은 늘 그렇게 움직입니다.',
                        likes: 765
                    }
                ]
            },
            {
                id: 'c3-3',
                author: philosophers.kant,
                text: '인간은 브랜드 이전에 존엄한 존재입니다.',
                likes: 2156,
                timestamp: '20시간',
                replies: []
            }
        ]
    },
    {
        id: 4,
        author: philosophers.ethicsgram,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e8f5e9" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23699f5e" text-anchor="middle" dominant-baseline="middle"%3E디지털 굿즈 & 친환경 상품%3C/text%3E%3C/svg%3E',
        caption: '디지털 굿즈는 ESG 시대의 새로운 대안이 될 수 있을까요?',
        likes: 2749,
        liked: false,
        saved: false,
        timestamp: '3일 전',
        comments: [
            {
                id: 'c4-1',
                author: philosophers.kong,
                text: '새로운 방식이라도 절제가 함께해야 합니다.',
                likes: 845,
                timestamp: '3일',
                replies: [
                    {
                        author: philosophers.kong,
                        text: '기술보다 중요한 것은 사용하는 사람의 태도입니다.',
                        likes: 467
                    }
                ]
            },
            {
                id: 'c4-2',
                author: philosophers.kant,
                text: '환경과 인간을 함께 존중하는 선택이라면 윤리적으로 의미 있습니다.',
                likes: 1342,
                timestamp: '2일',
                replies: [
                    {
                        author: philosophers.kant,
                        text: '윤리적 의도가 실천으로 이어질 때 지속가능성이 완성됩니다.',
                        likes: 789
                    }
                ]
            },
            {
                id: 'c4-3',
                author: philosophers.wilde,
                text: '예술적 경험이 유지된다면 새로운 매체도 가능합니다.',
                likes: 1089,
                timestamp: '2일',
                replies: []
            }
        ]
    }
];
