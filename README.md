# Mediumish - Jekyll Theme
-----------------------------
[Live Demo](https://wowthemesnet.github.io/mediumish-theme-jekyll/) &nbsp; | &nbsp; [Download](https://github.com/wowthemesnet/mediumish-theme-jekyll/archive/master.zip) &nbsp; | &nbsp; [Documentation](https://bootstrapstarter.com/bootstrap-templates/template-mediumish-bootstrap-jekyll/) &nbsp; | &nbsp; [Buy me a coffee](https://www.wowthemes.net/donate/)

![mediumish](assets/images/mediumish-jekyll-template.png)


## Features

- Built for Jekyll
- Compatible with Github pages
- Featured Posts
- Index Pagination
- SEO
- Feed
- Sitemap
- Post Share
- Post Categories
- Prev/Next Link
- Category Archives (Compatible with Github pages)
- Jumbotron Categories
- Post Reviews with Stars
- Blurred Spoilers
- Table of Content
- Lazy Load Images
- Integrations:
  - Disqus Comments
  - Google Analaytics
  - Mailchimp Integration
  - Adsense
- Design Features:
  - Bootstrap v4.x
  - Font Awesome
  - Masonry
- Layouts:
  - Default
  - Post
  - Page
  - Archive
  - Categories (for 100% compatibility with Github pages)

## How to use “Mediumish” theme

1. Download or `git clone https://github.com/wowthemesnet/mediumish-theme-jekyll.git`
2. `cd mediumish-theme-jekyll`
3. `bundle`
4. Edit `_config.yml` options. If your site is in root: baseurl: ''. Also, change your Google Analytics code, disqus username, authors, Mailchimp list etc.
5. `jekyll serve --watch`
6. Start by adding your .md files in `_posts`. Mediumish already has a few examples.
7. YAML front matter
  - featured post - featured:true
  - exclude featured post from “All stories” loop to avoid duplicated posts - hidden:true
  - post image - image: assets/images/mypic.jpg
  - external post image - image: "https://externalwebsite.com/image4.jpg"
  - page comments - comments:true
  - meta description (optional) - description: "this is my meta description"


## YAML Post Example:

```
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
description: "Something about this post here"
---
```

## YAML Page Example

```
---
layout: page
title: Mediumish Template for Jekyll
comments: true
---
```

## Rating

```
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
description: "Something about this post here"
rating: 4.5
---
```

## Adsense

Enable this option by editing `_config.yml`.

```
# Adsense (change to "enabled" to activate, also your client id and ad slot. Create a new ad unit from your Adsense account to get the slot.)
adsense: "disabled"
adsense-data-ad-client: "ca-pub-3412143450191416"
adsense-data-ad-slot: "1363087678"
```

## Lazy Load Images

Enable this option by editing `_config.yml`.

```
# Lazy Images ("enabled" or "disabled")
lazyimages: "enabled"
```

## Table of Contents

Add toc:true on your post YAML.

```
---
layout: post
title:  "Education must also train one for quick, resolute and effective thinking."
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/3.jpg
beforetoc: "Markdown editor is a very powerful thing. In this article I'm going to show you what you can actually do with it, some tricks and tips while editing your post."
toc: true
---
```

### Copyright

Copyright (C) 2019 Sal, https://www.wowthemes.net


**Mediumish for Jekyll** is designed and developed by [Sal](https://www.wowthemes.net) and it is *free* under MIT license. 

<a href="https://www.wowthemes.net/donate/" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

### Contribute

1. [Fork the repo](https://github.com/wowthemesnet/mediumish-theme-jekyll).
2. Clone a copy of your fork on your local
3. Create a branch off of master and give it a meaningful name (e.g. my-new-mediumish-feature).
4. Make necessary changes, commit, push and open a pull request on GitHub.

Thank you!
