export default [
  {
    name: 'Blog Title',
    desc: 'An AI tool that generate blog title depending on your blog information',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/2460/2460851.png',
    slug: 'generate-blog-title',
    aiPrompt: 'Generate 5 blog topic ideas in bullet wise only based on give niche topic and give me result in Rich Text editor format',
    form: [
      { 
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline'
      }
    ]

  },


  {
    name: 'Blog Content',
    desc: 'An AI tool that generate blog post depends on your blog information',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/10473/10473118.png',
    slug: 'blog-content-generation',
    aiPrompt: 'Generate Blog Content based on topic and outline ',
    form: [
      {
        label: 'Enter your blog topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter blog Outline here',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },

  {
    name: 'Blog Topic Ideas',
    desc: 'An AI tool that serves as your personal blog post title',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
    slug: 'blog-topic-idea',
    aiPrompt: 'Give me 5 blog topic ideas in bullet wise only based on give niche topic and give me result in Rich Text editor format',
    form: [
      {
        label: 'Enter your Niche',
        field: 'input',
        name: 'niche',
        required: true
      },
    ]

  },

  {
    "name": "YouTube SEO Title Generator",
    "desc": "An AI-powered tool that generates high-ranking, SEO-optimized YouTube video titles based on your content.",
    "category": "YouTube Tools",
    "icon": "https://cdn-icons-png.flaticon.com/128/2522/2522649.png",
    "slug": "youtube-seo-title-generator",
    "aiPrompt": "Generate the 5 best SEO-optimized and high-ranking YouTube video title ideas based on the given topic and description.",
    "form": [
      {
        "label": "Enter your YouTube video topic keywords",
        "field": "input",
        "name": "keywords",
        "placeholder": "e.g., Digital Marketing Tips, AI Content Creation",
        "required": true
      },
      {
        "label": "Enter a brief outline of your YouTube video",
        "field": "textarea",
        "name": "outline",
        "placeholder": "Provide a short description or main points of your video...",
        "required": false
      }
    ]
  }
  ,


  {
    "name": "YouTube Description Generator",
    "desc": "An AI-powered tool that generates engaging YouTube video descriptions with SEO optimization and emojis.",
    "category": "YouTube Tools",
    "icon": "https://cdn-icons-png.flaticon.com/128/15302/15302398.png",
    "slug": "youtube-description-generator",
    "aiPrompt": "Generate an engaging and SEO-optimized YouTube description with relevant emojis based on the given topic and outline.",
    "form": [
      {
        "label": "Enter your video topic/title",
        "field": "input",
        "name": "topic",
        "placeholder": "e.g., How to Get More Subscribers on YouTube",
        "required": true
      },
      {
        "label": "Enter a brief YouTube description outline (Optional)",
        "field": "textarea",
        "name": "outline",
        "placeholder": "Provide key points or a summary of your video...",
        "required": false
      }
    ]
  }
  ,


  {
    "name": "YouTube Tags Generator",
    "desc": "An AI-powered tool that generates optimized YouTube tags based on your niche and video content.",
    "category": "YouTube Tools",
    "icon": "https://cdn-icons-png.flaticon.com/128/10884/10884883.png",
    "slug": "youtube-tags-generator",
    "aiPrompt": "Generate 10 highly relevant and SEO-friendly YouTube tags in bullet points based on the given niche topic. Format the result in Rich Text Editor format.",
    "form": [
      {
        "label": "Enter your video title",
        "field": "input",
        "name": "title",
        "placeholder": "e.g., How to Grow on YouTube in 2024",
        "required": true
      },
      {
        "label": "Enter a brief YouTube video outline (Optional)",
        "field": "textarea",
        "name": "textToImprove",
        "placeholder": "Provide key points or a short summary of your video...",
        "required": false
      }
    ]
  }
  ,


  {
    name: 'Add Emojis To Text',
    desc: 'An AI tool that generate blog title depends on your blog information',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/17985/17985564.png',
    aiPrompt: 'Add Emoji to outline text depends on outline ',
    slug: 'add-emoji-to-text',
    form: [
      {
        label: 'Enter your text to add emojis',
        field: 'textarea',
        name: 'outline',
        required: true
      },
    ]
  },


  {
    "name": "Plagiarism-Free Article Rewriter",
    "desc": "An AI-powered tool that rewrites articles to be 100% unique and plagiarism-free while maintaining original meaning.",
    "category": "Rewriting Tools",
    "icon": "https://cdn-icons-png.flaticon.com/128/15972/15972671.png",
    "slug": "rewrite-article",
    "aiPrompt": "Rewrite the given text to be plagiarism-free while maintaining readability and clarity. Ensure the content is unique and engaging.",
    "form": [
      {
        "label": "Enter text to be rewritten",
        "field": "textarea",
        "name": "outline",
        "placeholder": "Paste your article or content here...",
        "required": true
      }
    ]
  }
  ,


  {
    name: 'Text Improver',
    desc: 'This handy tool refines your writing , elimates error , enhances writing by improving clarity, grammar, tone, and readability',
    category: 'Writing Assistant',
    icon: 'https://cdn-icons-png.flaticon.com/128/12860/12860749.png',
    aiPrompt: 'Enhance the following text by improving clarity, grammar, tone, and readability while preserving its original meaning: [Insert Text Here]. Make it more engaging and professional if needed',
    slug: 'text-improver',
    form: [
      {
        label: 'Enter text that you want to re-write or improve',
        field: 'textarea',
        name: 'textToImprove',
      },
    ]

  },
  {
    "name": "Instagram Post Generator",
    "desc": "An AI-powered tool that creates engaging and high-quality Instagram posts based on your keywords.",
    "category": "Social Media Tools",
    "icon": "https://cdn-icons-png.flaticon.com/128/5692/5692184.png",
    "slug": "instagram-post-generator",
    "aiPrompt": "Generate 3 creative and engaging Instagram post captions with relevant hashtags based on the given keywords.",
    "form": [
      {
        "label": "Enter keywords for your post",
        "field": "input",
        "name": "keywords",
        "placeholder": "e.g., fitness motivation, travel photography",
        "required": true
      }
    ]
  },

  {
    "name": "Instagram Hashtag Generator",
    "desc": "An AI-powered tool that generates trending and relevant Instagram hashtags based on your keywords.",
    "category": "Social Media Tools",
    "icon": "https://cdn-icons-png.flaticon.com/128/5692/5692184.png",
    "slug": "instagram-hashtag-generator",
    "aiPrompt": "Generate 15 trending and relevant Instagram hashtags based on the given keywords. Ensure they are optimized for engagement and reach.",
    "form": [
      {
        "label": "Enter keywords for hashtag generation",
        "field": "input",
        "name": "keywords",
        "placeholder": "e.g., travel, fitness, fashion",
        "required": true
      },
      // {
      //   "label": "Select hashtag style",
      //   "field": "dropdown",
      //   "name": "style",
      //   "options": [
      //     { "label": "Select a style", "value": "", "disabled": true, "selected": true },
      //     { "label": "Trending", "value": "trending" },
      //     { "label": "Niche-Specific", "value": "niche" },
      //     { "label": "High Engagement", "value": "engagement" },
      //     { "label": "Branding", "value": "branding" }
      //   ],
      //   "required": true
      // }
    ]
  },


  {

    "name": "Code Generator",
    "desc": "This handy tool generates optimized and efficient code snippets based on your input.",
    "category": "development",
    "icon": "https://cdn-icons-png.flaticon.com/128/3859/3859496.png",
    "aiPrompt": "Generate a code snippet based on a given programming language and functionality.",
    "slug": "code-generator",
    "form": [
      {
        "label": "Enter Programming Language",
        "field": "input",
        "name": "language",
        "required": true
      },
      {
        "label": "Describe the functionality",
        "field": "textarea",
        "name": "functionality",
        "required": true
      }
    ]
  }

]