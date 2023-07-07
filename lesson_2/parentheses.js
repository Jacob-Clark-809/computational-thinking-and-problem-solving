function isBalanced(string) {
  let change = true;
  while (change) {
    let oldString = string;
    string = string.replace(/\([^\(\)]*\)/, '');
    change = !(oldString === string);
  }

  console.log(
    !(string.includes('(') || string.includes(')'))
    );
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false