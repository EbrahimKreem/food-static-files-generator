import { write } from "./fileSystem";

import getMenuGenerator from "./utils";

// right now it is used only for getMenuGenerator, but I think it is wrong.
// and we need to regenerate all files from scratch each time. especially if
// we are creating a new file or making changes at
// @TODO big issue
const generateFile = () => {
  const fileName = "generatedMenu";
  const path = `./output/${fileName}.json`; // i don't like this paths. at least we can move first part outside - aka output...

  // @TODO right now we're using only one method from our list.
  // so it works only for one case.
  // we should pass a function aka callback as attribute to this method and call it here.
  const data = getMenuGenerator(2);

  // @TODO should be pass a callback here?
  write(path, data);
};

module.exports = generateFile;
