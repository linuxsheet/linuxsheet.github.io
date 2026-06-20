function Distros() {
  return (
    <div>
      <h2>1. Fedora Linux</h2>
      Good overall. It's stable release but not ancient like Debian.
      <h2>2. Debian Linux</h2>I know, it's ancient but it's stable. If you
      prefer stability over everything, you should check Debian.
      <h2>3. Arch Linux</h2>
      If you prefer latest updates over everything, you can prefer Arch. I know,
      it's known for it's being unstable but at least it has AUR and latest
      packages. And, it's not that unstable.
      <h2>4. Gentoo Linux</h2>
      If you have a good CPU and you want minimalism, you can use Gentoo. You
      can remove or add any element to packages using USE flags. You can
      optimize it really well. It's opposite of bloated.
      <h2>5. Artix Linux</h2>
      If you love Arch Linux but not systemd, you can use Artix. It's just Arch
      but without systemd.
      <h2>6. Linux Mint</h2>
      If you want an easy setup and don't mess with problems, go with Mint.
      <h2>7. Void Linux</h2>
      If you want simplicity, check Void Linux. It's really simple and it
      doesn't have systemd.
    </div>
  );
}

export default Distros;
