describe('itBehavesLike', function() {
  beforeEach(function() {
    jasmine.sharedExamples = {
      'example one': jasmine.createSpy('example one'),
      'example two': jasmine.createSpy('example two')
    };
  });

  afterEach(function() {
    jasmine.sharedExamples = null;
  });

  describe('when called with one argument', function() {
    it('applies the provided argument to the existing shared example', function(){
      itBehavesLike('example one', 'argument one');
      expect(jasmine.sharedExamples['example one']).toHaveBeenCalledWith('argument one');
    });
  });

  describe('when called with two arguments', function() {
    it('applies the provided arguments to the existing shared example', function(){
      itBehavesLike('example one', 'argument one', 'argument two');
      expect(jasmine.sharedExamples['example one']).toHaveBeenCalledWith('argument one', 'argument two');
    });
  });

  describe('when called with a function', function(){
    it('executes the function', function(){
      var innerBlock = jasmine.createSpy('innerBlock');
      itBehavesLike('example one', innerBlock);
      expect(innerBlock).toHaveBeenCalled();
    });
  });

  describe('when called with a function and arguments', function(){
    it('applies the arguments and executes the function', function(){
      var innerBlock = jasmine.createSpy('innerBlock');
      itBehavesLike('example one', 'argument one', 'argument two', innerBlock);
      expect(innerBlock).toHaveBeenCalled();
      expect(jasmine.sharedExamples['example one']).toHaveBeenCalledWith('argument one', 'argument two');
    });
  });

  describe('when calling a non existent shared example', function() {
    it('throws an error', function() {
      expect(function(){
        itBehavesLike('example zero');
      }).toThrow('cannot find shared behavior: "example zero"');
    });
  });
});
