# Linux

Swanalekha is available in all major GNU/Linux distributions like Ubuntu, Debian, Fedora etc. To install and configure Swanalekha, please follow the below instructions. It is assumes that you are not using
very old versions of these distributions.

## Debian, Ubuntu and other Debian based OS

Use your package manager to search and install the following packages:
```ibus ibus-m17n ibus-gtk3 m17n-contrib```.

Alternatively, if you are comfortable
using linux terminal, you may install them using the following
command:

```sudo apt install ibus ibus-m17n ibus-gtk3 m17n-contrib```

After installing the packages, either logout and login again or run the following command
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
