# Linux

Swanalekha is available in all major GNU/Linux distributions like Ubuntu, Debian, Fedora etc. To install and configure Swanalekha, please follow the below instructions. It is assumed that you are not using
very old versions of these distributions.

## Installing Packages

Package names of the packages required to make Swanalekha work on Linux mostly do not change across distributions. So you can use your GUI package manager such as 'Software Center' on Ubuntu to search and install the following packages:

```ibus ibus-m17n m17n-db```.

Alternatively, if you are comfortable
using linux terminal, you may install them using the respective package manager of your distribution:

### Debian, Ubuntu and other Debian based OS
```sudo apt install ibus ibus-m17n m17n-db```

### Archlinux, Manjaro and other Archlinux based OS
```sudo pacman -S ibus ibus-m17n m17n-db```.

### Fedora
```sudo dnf install ibus-m17n m17n-db```.

### openSUSE
```sudo zypper install ibus ibus-m17n m17n-db```.

NOTE: If the package names change in the future and is not updated here it always a good idea to search for the packages through your package manager, that is ```apt search``` for Debian and Ubuntu, ```pacman -Ss``` for Archlinux and Manjaro and ```dnf search``` for Fedora. Alternatively you can use the package tracking systems of your distribution to find updated package names. Package tracking sytems for Debian. Ubuntu, Archlinux, Fedora and openSUSE are given below.

- Debian : [Debian Tracker](https://tracker.debian.org/)
- Ubuntu : [Ubuntu Packages Search](https://packages.ubuntu.com/)
- Archlinux: [Package Search](https://www.archlinux.org/packages/)
- Fedora : [Fedora Packages Search](http://apps.fedoraproject.org/packages)
- openSUSE : [openSUSE Packages Search](https://software.opensuse.org/)

## Setting up iBus

If you're using Gnome (which is what comes default in distributions like Ubuntu and Fedora) or any GTK based desktop environment, after installing the packages, you should either logout and login again or run the following command
                            for them to be loaded:
```ibus restart```

Once that is done, you need to select Swanalekha as input method to your input method settings. The following two videos shows how to do this in Ubuntu 18.04 and 14.04, respectively.

Once configured, you can open any text editor and choose Swanalekha as input method and start typing in Malayalam

<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hlkty9s5t30" frameborder="0"
        allow="autoplay; encrypted-media" allowfullscreen></iframe> <br />
</div>

<div class="video">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aBF2kyXB8v8"
frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

if you are using KDE Plasma , after installing the packages add widget input method panel into your kde plasma panel and you should add the following lines to ```~/.config/plasma-workspace/env/ibus.sh``` file :

```bash
export GTK_IM_MODULE="ibus"
export QT_IM_MODULE="ibus"
export XMODIFIERS="@im=ibus"
ibus-daemon -drx --panel=/usr/lib64/libexec/kimpanel-ibus-panel
```

Once done, logout and login from plasma and right click input method widget and configure input method to add swanalekha from input method tab (search input method list for swanalekha). Now you can select ml-swanalekha from input method widget and use it.


## Disable the suggestions

Once you learned all key combinations, the suggestions under your cursor may not be interesting. You can switch of that.

There is a new version of swanalekha which is not yet available in operating systems by default, but can
be installed. This version does not have the suggestions list by default. Only the list under
cursor
is disabled, you can still use up/down arrows to choose the options.

Open the terminal. In Ubuntu, you can do that by Alt+F1, search Terminal.

Run this command to get the new version of swanalekha:

```wget http://swanalekha.smc.org.in/m17n/ml-swanalekha.mim```

Install it using the following command

```sudo cp ml-swanalekha.mim /usr/share/m17n/ml-swanalekha.mim```

Either logout and login or restart the input method system by the following command:

```ibus-daemon -rdx```

![](/img/update-swanalekha.jpg)

Whether the suggestions should be shown or not is an option, you may change
that using
m17n-im-config command.You
may need to install m17n-im-config package for this.

![](/img/swanalekha-config.jpg)
