Site for bestwhatsappgroups.app

# Workflow

## Setup

```
mkdir bestwhatsappgroups.app
cd bestwhatsappgroups.app
git init
git remote add origin https://distant-gradient@github.com/distant-gradient/bestwhatsappgroups.app.git
git pull origin master
git remote add upstream https://github.com/animeshchat/blog.git
```

## Commits

```
git commit -a -m "commit message"
git push -u origin master
git push -f origin master:gh-pages
```

## Pull upstream changes

```
git pull upstream master --allow-unrelated-histories
git commit -a -m "merge with upstream"
git push -u origin master
```

## Run

```
rm Gemfile.lock (if required)
bundle
jekyll serve

```
