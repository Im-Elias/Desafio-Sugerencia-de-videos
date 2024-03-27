//Modulo de reproducción
const moduloVideos = (url, id) => {
  (() => {
    switch (id) {
      case "musica":
        document.getElementById(id).setAttribute("src", url);
        break;
      case "peliculas":
        document.getElementById(id).setAttribute("src", url);
        break;
      case "series":
        document.getElementById(id).setAttribute("src", url);
        break;
    }
  })();
};

//Clases
class Multimedia {
  constructor(url) {
    this._url = url;
  }
  getUrl() {
    return this._url;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }
  playMultimedia() {
    moduloVideos(this.getUrl(), this.id);
  }
  setInicio(tiempo) {
    this._url = this._url + "&t=" + "&amp;start=" + tiempo;
    moduloVideos(this.getUrl(), this.id);
  }
}

//Instancias
const musica = new Reproductor(
  "https://www.youtube.com/embed/nIftOQKJWjA?si=wOoKdIGgnl3ogMFf",
  "musica"
);
const pelicula = new Reproductor(
  "https://www.youtube.com/embed/0hd_91iZ0S8?si=X9j1BiIUCL7W-0r6",
  "peliculas"
);
const series = new Reproductor(
  "https://www.youtube.com/embed/xTO-rrvZ9Dc?si=vLV7_0plMal6xqoP",
  "series"
);

//Ejecución de metodos
musica.playMultimedia();
pelicula.playMultimedia();
series.playMultimedia();

series.setInicio(30);
