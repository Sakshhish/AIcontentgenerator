export default [
    {
      name: 'Blog Title',
      desc: 'An AI tool that generates blog titles based on your blog information.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/2460/2460851.png',
      slug: 'generate-blog-title',
      aiPrompt: 'Give me 5 blog topic ideas in bullet points based on the given niche and topic, and provide results in Rich Text Editor format.',
      form: [
        { label: 'Enter your blog niche', field: 'input', name: 'niche', required: true },
        { label: 'Enter blog outline', field: 'textarea', name: 'outline' },
      ],
    },
    {
      name: 'Blog Content',
      desc: 'An AI tool that generates full blog posts based on the provided topic and outline.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/10473/10473118.png',
      slug: 'blog-content-generation',
      aiPrompt: 'Generate Blog Content based on the topic and outline.',
      form: [
        { label: 'Enter your blog topic', field: 'input', name: 'topic', required: true },
        { label: 'Enter blog outline here', field: 'textarea', name: 'outline' },
      ],
    },
    {
      name: 'Blog Topic Ideas',
      desc: 'An AI tool that suggests blog post topics.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
      slug: 'blog-topic-idea',
      aiPrompt: 'Give me 5 blog topic ideas in bullet points based on the given niche and topic, and provide results in Rich Text Editor format.',
      form: [
        { label: 'Enter your niche', field: 'input', name: 'niche', required: true },
      ],
    },
    {
      name: 'YouTube SEO Title',
      desc: 'An AI tool that generates high-ranking SEO-optimized YouTube titles.',
      category: 'Youtube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/2522/2522649.png',
      slug: 'youtube-seo-title',
      aiPrompt: 'Give me the 5 best SEO-optimized, high-ranking YouTube title ideas.',
      form: [
        { label: 'Enter your YouTube video topic keywords', field: 'input', name: 'keywords', required: true },
        { label: 'Enter YouTube description outline', field: 'textarea', name: 'outline' },
      ],
    },
    {
      name: 'YouTube Description',
      desc: 'An AI tool that generates YouTube descriptions with emojis.',
      category: 'Youtube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
      slug: 'youtube-description',
      aiPrompt: 'Generate a YouTube description with relevant emojis.',
      form: [
        { label: 'Enter your blog topic/title', field: 'input', name: 'topic', required: true },
        { label: 'Enter YouTube description outline', field: 'textarea', name: 'outline' },
      ],
    },
    {
      name: 'YouTube Tags',
      desc: 'An AI tool that generates optimized YouTube tags.',
      category: 'Youtube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
      slug: 'youtube-tag',
      aiPrompt: 'Generate 10 optimized YouTube tags in bullet points based on the given niche and topic, and provide results in Rich Text Editor format.',
      form: [
        { label: 'Enter your blog title', field: 'input', name: 'title', required: true },
        { label: 'Enter YouTube video outline (Optional)', field: 'textarea', name: 'textToImprove' },
      ],
    },
    {
      name: 'Add Emojis To Text',
      desc: 'An AI tool that enhances text by adding relevant emojis.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/17985/17985564.png',
      slug: 'add-emoji-to-text',
      aiPrompt: 'Add relevant emojis to the given text.',
      form: [
        { label: 'Enter your text to add emojis', field: 'textarea', name: 'outline', required: true },
      ],
    },
    {
      name: 'Rewrite Article (Plagiarism-Free)',
      desc: 'An AI tool that rewrites content to be plagiarism-free.',
      category: 'Rewriting Tool',
      icon: 'https://cdn-icons-png.flaticon.com/128/15972/15972671.png',
      slug: 'rewrite-article',
      aiPrompt: 'Rewrite the given content to be unique and plagiarism-free.',
      form: [
        { label: 'Enter your text to rewrite', field: 'textarea', name: 'outline', required: true },
      ],
    },
  ];
  