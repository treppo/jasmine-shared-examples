var isFunction = function (subject) {
  return Object.prototype.toString.call(subject) == '[object Function]';
};

var filterArguments = function (args) {
  var i = 1,
      length = args.length,
      exampleArguments = [],
      innerBlock;

  for (;i < length; i++) {
    if (!innerBlock && isFunction(args[i])) {
      innerBlock = args[i];
    } else {
      exampleArguments.push(args[i]);
    }
  }

  return [args[0], exampleArguments, innerBlock];
};

itBehavesLike = function() {
  var filteredArguments = filterArguments(arguments),
      exampleName = filteredArguments[0],
      exampleArguments = filteredArguments[1],
      innerBlock = filteredArguments[2],
      exampleGroup = jasmine.sharedExamples[exampleName];

  if (exampleGroup) {
    return describe(exampleName, function() {
      if (innerBlock) { innerBlock(); }
      exampleGroup.apply(this, exampleArguments);
    });
  } else {
    throw new Error('cannot find shared behavior: "' + exampleName + '"');
  }
};
