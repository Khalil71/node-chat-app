const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id:'1',
      name:'mike',
      room:'node'
    }, {
      id:'2',
      name:'jen',
      room:'react'
    }, {
      id:'3',
      name:'joe',
      room:'node'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id:'123',
      name:'mido',
      room:'office'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '6';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2'
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);

  });

  it('should not find user', () => {
    var userId = '5'
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for node', () => {
    var userList = users.getUserList('node');
    expect(userList).toEqual(['mike', 'joe']);
  });

  it('should return names for react', () => {
    var userList = users.getUserList('react');
    expect(userList).toEqual(['jen']);
  });
});
