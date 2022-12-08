"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[9022],{3905:(e,A,t)=>{t.d(A,{Zo:()=>i,kt:()=>d});var n=t(7294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,n,a=function(e,A){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var A=n.useContext(s),t=A;return e&&(t="function"==typeof e?e(A):l(l({},A),e)),t},i=function(e){var A=u(e.components);return n.createElement(s.Provider,{value:A},e.children)},c={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},p=n.forwardRef((function(e,A){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return t?n.createElement(m,l(l({ref:A},i),{},{components:t})):n.createElement(m,l({ref:A},i))}));function d(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in A)hasOwnProperty.call(A,s)&&(o[s]=A[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},677:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const r={slug:"install-custom-image-on-contabo",title:"Install custom image on Contabo",authors:["gnuion"],tags:["backend"]},l=void 0,o={permalink:"/docion/blog/install-custom-image-on-contabo",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2022-11-26-install-custom-image-on-contabo/index.md",source:"@site/blog/2022-11-26-install-custom-image-on-contabo/index.md",title:"Install custom image on Contabo",description:"How to install a custom Arch Image on Contabo.",date:"2022-11-26T00:00:00.000Z",formattedDate:"November 26, 2022",tags:[{label:"backend",permalink:"/docion/blog/tags/backend"}],readingTime:2.255,hasTruncateMarker:!0,authors:[{name:"Jon Zuka",title:"Blog owner",url:"https://github.com/gnuion",imageURL:"https://github.com/gnuion.png",key:"gnuion"}],frontMatter:{slug:"install-custom-image-on-contabo",title:"Install custom image on Contabo",authors:["gnuion"],tags:["backend"]},prevItem:{title:"Linux Tricks",permalink:"/docion/blog/linux-tricks"},nextItem:{title:"Redux Toolkit Template",permalink:"/docion/blog/redux-toolkit-template"}},s={authorsImageUrls:[void 0]},u=[{value:"Choose Custom installation",id:"choose-custom-installation",level:2},{value:"Create Partitions",id:"create-partitions",level:3},{value:"Chroot",id:"chroot",level:3},{value:"Configuring network",id:"configuring-network",level:3},{value:"Wired adapter using DHCP",id:"wired-adapter-using-dhcp",level:4},{value:"Wired adapter using a static IP",id:"wired-adapter-using-a-static-ip",level:4},{value:"Install sudo",id:"install-sudo",level:3},{value:"Enable SSH",id:"enable-ssh",level:3}],i={toc:u};function c(e){let{components:A,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to install a custom Arch Image on Contabo."),(0,a.kt)("h2",{id:"choose-custom-installation"},"Choose Custom installation"),(0,a.kt)("p",null,"Disable cloud-init"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom Install",src:t(2576).Z,width:"838",height:"163"})),(0,a.kt)("p",null,"Choose custom install"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom Install",src:t(4936).Z,width:"599",height:"263"})),(0,a.kt)("p",null,"Now use a VNC client with the provided credentials from contabo. Then choose your image. Here I chose Arch Linux."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom Install",src:t(712).Z,width:"659",height:"350"})),(0,a.kt)("p",null,"Do a ping test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ping google.com\n")),(0,a.kt)("h3",{id:"create-partitions"},"Create Partitions"),(0,a.kt)("p",null,"Create an empty GPT partition table. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," for a list of avalable commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fdisk /dev/sda\n")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"bios_grub")," partiton of 1MiB starting at 1MiB from the start of the disk."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"n\n2048\n+1MiB\n")),(0,a.kt)("p",null,"Set type as ",(0,a.kt)("inlineCode",{parentName:"p"},"bios_grub"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"t\n4\n")),(0,a.kt)("p",null,"Now create the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," partition with the size of 30GiB:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"n\n2\n4096\n+30GiB\n")),(0,a.kt)("p",null,"Create other partitions you might need, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"home"),"."),(0,a.kt)("p",null,"Format partitions with a ext4 filesystem:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkfs -t ext4 /dev/sda2\n")),(0,a.kt)("p",null,"Mount root partition in ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt")," directory. In case you craeted a ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," partition, mount it to ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/home")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mount /dev/sda2 /mnt\nmount -o x-mount.mkdir /dev/sda4 /mnt/home\n")),(0,a.kt)("p",null,"Install base system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacstrap -i /mnt base linux linux-firmware\n")),(0,a.kt)("p",null,"Configure fstab for the new installation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"genfstab -U /mnt >> /mnt/etc/fstab\n")),(0,a.kt)("h3",{id:"chroot"},"Chroot"),(0,a.kt)("p",null,"Change root into the new system. Then install a text editor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"arch-chroot /mnt\npacman -S nano\n")),(0,a.kt)("p",null,"Set timezone:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ln -sf /usr/share/zoneinfo/Region/City /etc/localtime\n")),(0,a.kt)("p",null,"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/locale.gen")," by uncommenting ",(0,a.kt)("inlineCode",{parentName:"p"},"en_US.UTF-8 UTF-8"),". Generate the locales."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/locale.gen\nlocale-gen\n")),(0,a.kt)("p",null,"Create a locale.conf file, and set the LANG variable accordingly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# /etc/locale.conf\nLANG=en_US.UTF-8\n")),(0,a.kt)("p",null,"Important! Don't forget to setup a root password!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"passwd\n")),(0,a.kt)("p",null,"Install bootloader."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -S grub\ngrub-install /dev/sda --target=i386-pc\ngrub-mkconfig -o /boot/grub/grub.cfg\n")),(0,a.kt)("p",null,"Reboot and good luck \ud83e\udd1e."),(0,a.kt)("h3",{id:"configuring-network"},"Configuring network"),(0,a.kt)("p",null,"To use systemd-networkd, enable the service. When reconiguring, restart service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable --now systemd-networkd\n")),(0,a.kt)("p",null,"Check network device name using ",(0,a.kt)("inlineCode",{parentName:"p"},"ip a"),"."),(0,a.kt)("h4",{id:"wired-adapter-using-dhcp"},"Wired adapter using DHCP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# /etc/systemd/network/20-wired.network\n[Match]\nName=YOUR_NETWORK_DEVICE_NAME\n\n[Network]\nDHCP=yes\nDNS=8.8.8.8\n")),(0,a.kt)("h4",{id:"wired-adapter-using-a-static-ip"},"Wired adapter using a static IP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# /etc/systemd/network/20-wired.network\n[Match]\nName=YOUR_NETWORK_DEVICE_NAME\n\n[Network]\nAddress=YOUR_STATIC_IP_ADDRESS\nGateway=YOUR_GATEWAY\nDNS=8.8.8.8\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable --now systemd-networkd\n")),(0,a.kt)("h3",{id:"install-sudo"},"Install sudo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -S sudo\n")),(0,a.kt)("p",null,"Create a new user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --create-home YOUR_USERNAME\nusermod --append --groups wheel\n")),(0,a.kt)("p",null,"Edit sudoes file to uncommen wheel user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"EDITOR=nano visudo\n\n# Then find and uncomment\n%wheel ALL=(ALL:ALL) NOPASSWD:ALL\n\n# Then login to user and test\nsu YOUR_USERNAME\nsudo echo hello\n")),(0,a.kt)("h3",{id:"enable-ssh"},"Enable SSH"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S openssh\nsudo systemctl enable --now sshd\n")),(0,a.kt)("p",null,"Generate ",(0,a.kt)("strong",{parentName:"p"},"SSH")," keys on client and server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519\n")),(0,a.kt)("p",null,"Copy the content of the public key of the client and paste it to the file ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys")," on the server."),(0,a.kt)("p",null,"Force public key authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# /etc/ssh/sshd_config\nPasswordAuthentication no\nAuthenticationMethods publickey\n")))}c.isMDXComponent=!0},712:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,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"},2576:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/disable_could_init-4078852bb5180c933b52131567c1b992.png"},4936:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/initiate_custom_install-e1d9e2a3305591dd380c58b19831a9ae.png"}}]);