if [[ $1 = "" ]]; then
bundle exec jekyll serve
fi

if [[ $1 = "install" ]]; then
sudo pacman -Sy rubygems
gem install rouge
gen install kramdown
fi

if [[ $1 = "zip" ]]; then
7z a ../blog.7z -t7z ../blog -r
fi

if [[ $1 = "github" ]]; then
  cd _site/
  git add ./*
  git commit -am "Update $(date)"
  git push origin master
fi
