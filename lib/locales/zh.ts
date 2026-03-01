export const zh = {
  nav: {
    about: '关于我',
    experience: '工作经历',
    projects: '项目展示',
    contact: '联系方式'
  },
  hero: {
    greeting: '你好，我是',
    name: 'Yujun',
    description: '一名结果导向的软件工程师，拥有 4 年以上的软件设计、开发与测试综合经验。',
    downloadResume: '下载简历',
    getInTouch: '联系我',
    cards: [
      { title: '全栈开发', description: 'Java、Python、JS' },
      { title: '数据系统', description: 'MySQL、Redis、Kafka' },
      { title: '云与运维', description: 'AWS、Docker、K8s' },
      { title: '物联网与硬件', description: '树莓派、Arduino' }
    ]
  },
  about: {
    title: '关于我',
    subtitle: '热衷于构建可扩展系统，通过技术解决复杂问题',
    journey: '我的经历',
    journeyText1: '凭借在计算机科学、物联网与电气工程方面的扎实基础，我形成了覆盖全栈开发、测试自动化和物联网系统的多元技能组合。我的经验既包括在 TikTok 支撑十亿级用户系统，也包括为智能家居打造创新物联网方案。',
    journeyText2: '我热衷于利用前沿技术解决复杂问题并创造业务价值。我的专长包括 Java、Python、JavaScript、AWS 以及多种物联网平台。',
    education: '教育背景',
    educationItems: [
      {
        degree: '计算机科学硕士（人工智能方向）',
        school: '佐治亚理工学院',
        detail: '在线项目 • 预计 2027 年'
      },
      {
        degree: '信息物理系统硕士',
        school: '东北大学（Northeastern University）',
        detail: '美国波士顿 • 2021 年 12 月'
      },
      {
        degree: '信息工程学士',
        school: '上海交通大学',
        detail: '中国上海 • 2018 年 7 月'
      }
    ]
  },
  experience: {
    title: '工作经历',
    subtitle: '构建可扩展系统，在不同行业持续交付高质量解决方案',
    jobs: [
      {
        company: 'TikTok',
        position: 'SDET II（隐私与安全）',
        period: '2024 年 9 月 - 2025 年 2 月',
        location: '美国加州圣何塞',
        highlights: [
          '为十亿用户规模的大数据系统提供高质量测试保障',
          '开发基于 Python 的自动化测试框架，实现 90% API 覆盖率',
          '使用 Go 构建演示服务，用于 Purpose Limitation SDK 的功能测试',
          '增强监控看板，实现实时洞察与异常检测'
        ],
        technologies: ['Python', 'Go', 'RPC', 'HTTP', '大数据', 'CI/CD']
      },
      {
        company: 'Marlabs LLC（IDEXX）',
        position: '全栈软件工程师',
        period: '2023 年 2 月 - 2024 年 8 月',
        location: '美国波士顿',
        highlights: [
          '基于 Redis 分布式存储实现用户会话管理',
          '使用 Thymeleaf 与 AJAX 构建产品和订单管理页面',
          '利用 Redis 原子操作优化库存扣减效率',
          '通过压测与优化实现 10 倍吞吐提升'
        ],
        technologies: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'RabbitMQ', 'Thymeleaf']
      },
      {
        company: 'RND4IMPACT Inc.',
        position: '软件开发工程师',
        period: '2022 年 5 月 - 2023 年 2 月',
        location: '远程',
        highlights: [
          '使用 Python 与 Java 实现端到端物联网解决方案',
          '通过自定义 JSON 格式设计数据管理策略',
          '集成 TLS 与鉴权机制，强化物联网安全性',
          '开发 MQTT 与 CoAP 服务，并接入云端可视化'
        ],
        technologies: ['Python', 'Java', 'MQTT', 'CoAP', 'IoT', 'MySQL', 'TLS']
      }
    ]
  },
  projects: {
    title: '项目展示',
    subtitle: '覆盖物联网、自动化与智能系统的创新实践',
    items: [
      {
        title: '智能家居控制系统',
        description: '端到端物联网方案，涵盖 MQTT/CoAP 通信、TLS 安全机制与云端可视化。',
        technologies: ['Python', 'Java', 'MQTT', 'CoAP', 'MySQL', 'TLS'],
        highlights: ['设备到云端通信', '实时数据可视化', '安全机制集成']
      },
      {
        title: '智能骑行套件',
        description: '完整的 AR 头盔系统，支持多传感器、速度检测与防碰撞能力。',
        technologies: ['C++', 'Python', 'Raspberry Pi', 'Arduino', 'Bluetooth'],
        highlights: ['AR 头盔显示', '速度与踏频检测', '防碰撞提醒']
      },
      {
        title: '高级安防系统',
        description: '多模态识别系统，支持人脸、字符与标记检测能力。',
        technologies: ['C++', 'OpenCV', '深度学习', 'Node.js', 'MySQL'],
        highlights: ['人脸识别', '字符识别', '实时处理']
      }
    ]
  },
  contact: {
    title: '联系我',
    subtitle: '我始终对新的机会和有挑战的项目保持兴趣，欢迎随时联系。',
    contactInfo: '联系信息',
    connectWithMe: '社交链接',
    sendEmail: '发送邮件',
    sendEmailDesc: '通过邮件与我联系',
    linkedin: 'LinkedIn',
    linkedinDesc: '在 LinkedIn 上联系我',
    github: 'GitHub',
    githubDesc: '查看我的代码'
  },
  footer: {
    copyright: '© 2024 Yujun Zheng. 使用 Next.js 与 Tailwind CSS 构建。'
  }
}
