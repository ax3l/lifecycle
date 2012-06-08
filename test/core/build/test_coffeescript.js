// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $(document).ready(function() {
    var LC;
    module("Lifecycle.js");
    LC = !window.LC && (typeof require !== 'undefined') ? require('lifecycle') : window.LC;
    test("TEST DEPENDENCY MISSING", function() {
      return ok(!!LC);
    });
    return test('ref countable (coffeescript)', function() {
      var MyClass, instance;
      MyClass = (function(_super) {

        __extends(MyClass, _super);

        function MyClass() {
          MyClass.__super__.constructor.apply(this, arguments);
          this.is_alive = true;
        }

        MyClass.prototype.__destroy = function() {
          return this.is_alive = false;
        };

        return MyClass;

      })(LC.RefCountable);
      instance = new MyClass();
      equal(instance.is_alive, true, 'is alive');
      equal(instance.refCount(), 1, '1 reference');
      equal(instance.retain(), instance, 'chaining');
      equal(instance.refCount(), 2, '2 references');
      equal(instance.retain(), instance, 'chaining');
      equal(instance.refCount(), 3, '3 references');
      equal(instance.is_alive, true, 'is alive');
      equal(instance.release(), instance, 'chaining');
      equal(instance.refCount(), 2, '2 references');
      equal(instance.is_alive, true, 'is alive');
      equal(instance.retain(), instance, 'chaining');
      equal(instance.refCount(), 3, '3 references');
      equal(instance.is_alive, true, 'is alive');
      equal(instance.release(), instance, 'chaining');
      equal(instance.refCount(), 2, '2 references');
      equal(instance.release(), instance, 'chaining');
      equal(instance.refCount(), 1, '1 reference');
      equal(instance.is_alive, true, 'is alive');
      equal(instance.release(), instance, 'chaining');
      equal(instance.refCount(), 0, '0 references');
      equal(instance.is_alive, false, 'is gone');
      raises((function() {
        return instance.release();
      }), null, 'LC.RefCounting: ref_count is corrupt');
      return equal(instance.is_alive, false, 'is gone');
    });
  });

}).call(this);
