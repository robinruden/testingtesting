const { getAuthors, authors} = require('./sum');

test(`Return all names from bla bla bla`, () =>{
    const expectedOutput =
      "Leo, Tolstoj" + 
      "Alexander, Pusjkin" +
      "Fjodor, Dostojevski" +
      "Anton, Tjechov" +
      "Vladimir, Nabokov" +
      "Maksim, Gorkij" +
      "Koldan, Egorov" +
      "Nikolaj, Gogl" +
      "Leonid, Andrejev" +
      "Mirra, Lokhvitskaya" +
      "Ivan, Krylov" +
      "Michail, Lermontov" +
      "Alexandr, Blok";

    expect(getAuthors(authors)).toBe(expectedOutput);
})



