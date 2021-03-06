import { Wadson } from './../js/wadson.js';

describe('wadson', function() {
  let lumberjackWadson;

  beforeEach(function() {
    lumberjackWadson = new Wadson("Lumberjack Wadson");
    jasmine.clock().install();
    lumberjackWadson.setHunger();
    lumberjackWadson.setSleep();
    lumberjackWadson.setPlay();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and base levels', function() {
    expect(lumberjackWadson.name).toEqual("Lumberjack Wadson");
    expect(lumberjackWadson.foodLevel).toEqual(10);
    expect(lumberjackWadson.sleepLevel).toEqual(3);
    expect(lumberjackWadson.playLevel).toEqual(5);
    expect(lumberjackWadson.level).toEqual(1);
  });

  it('should show decriments of food level', function() {
    jasmine.clock().tick(30001);
    expect(lumberjackWadson.foodLevel).toEqual(8);
  });

  it('should show decriments of sleep level', function() {
    jasmine.clock().tick(80001);
    expect(lumberjackWadson.sleepLevel).toEqual(1);
  });

  it('should show decriments of play level', function() {
    jasmine.clock().tick(30001);
    expect(lumberjackWadson.playLevel).toEqual(4);
  });

  it('Will alert the hunger levels of Wadson', function() {
    jasmine.clock().tick(90001);
    expect(lumberjackWadson.alertHunger()).toEqual("Wadson's tummy sure is 'a rumbl'n");
  });

  it('Will alert the sleep levels of Wadson', function() {
    jasmine.clock().tick(120001);
    expect(lumberjackWadson.alertSleepy()).toEqual("Auto SHUTdown yo! Wadson is going to sleep now whether you like it or not.");
  });

  it('Will set hunger level to default', function() {
    jasmine.clock().tick(30001);
    lumberjackWadson.feed()
    expect(lumberjackWadson.foodLevel).toEqual(10);
  });

  it('Will set sleep level to default', function() {
    jasmine.clock().tick(30001);
    lumberjackWadson.sleep();
    expect(lumberjackWadson.sleepLevel).toEqual(3);
  });

  it('Will set play level to default', function() {
    jasmine.clock().tick(30001);
    lumberjackWadson.recess();
    expect(lumberjackWadson.playLevel).toEqual(5);
  });

  it("Will increase food counter by 1", function(){
    lumberjackWadson.feed();
    expect(lumberjackWadson.foodCounter).toEqual(1);
  });

  it("Will increase sleep counter by 1", function(){
    lumberjackWadson.sleep();
    expect(lumberjackWadson.sleepCounter).toEqual(1);
  });

  it("Will increase play counter by 1", function(){
    lumberjackWadson.recess();
    expect(lumberjackWadson.playCounter).toEqual(1);
  });

  it("Will increase level by one based on counters", function(){
    lumberjackWadson.foodCounter = 21;
    lumberjackWadson.sleepCounter = 7;
    lumberjackWadson.playCounter = 8;
    lumberjackWadson.levelCounter();
    expect(lumberjackWadson.level).toEqual(2);
  });
});
