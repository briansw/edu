### Creative Computing

---

### Create a GitHub account and repository
1. Sign up for a [GitHub account](https://github.com). Note: use your newschool username.
2. Create a repository called `<YOUR USERNAME>.github.io`, ie, `briansw.github.com`

---

### Set up your local machine

#### Install Git
1. Open Terminal on your Mac `Applications > Utilities > Terminal`
2. Type `git` and press enter
3. Follow the instructions on screen to install OS X Dev Tools and Git

#### Create and add an SSH key to your GitHub account

1. [Create an SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
2. [Add SSH key to GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

#### Set your Git username and email
1. `git config --global user.name "<YOUR NAME>"`
2. git config --global user.email `"<YOUR EMAIL ADDRESS>"`

#### Download and install software
1. [VS Code](https://code.visualstudio.com/download)
2. [Sketch](https://www.sketchapp.com/)

---

### Set up your working repository

#### Clone your repository
```
cd ~
git clone <YOUR REPO PATH>
```

#### Clone the class starter package
```
cd ~
git clone git@github.com:briansw/edu-starter-pack.git
```
Move the cloned files and folders into your repository

#### Upload your changes to the GitHub server
```
git add .
git commit -m 'first commit'
git push
```
