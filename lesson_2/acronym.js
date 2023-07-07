function acronym(string) {
  let words = string.split(/[ -]/g);
  console.log(
    words.map(word => word.toUpperCase()[0]).join('')
    );
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"