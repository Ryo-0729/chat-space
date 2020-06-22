## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## users

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,
add_index: true|
|email|string|null: false,
unique: true|
|password|string|null:false|
|password confirmation|string|null: false|

### asociation
has_many:groups_users
has_many:groups,though:groups_users
has_many:tweets

## tweets
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|integer|null: false,
foreign_key: true|
|user_id|integer|null: false, 
foreign_key: true|

### asociation
 belongs_to:user
 belongs_to:group

## groups
|Column|Type|Options|
|------|----|-------|
|group_name|string|
null:false, unique:true|

### association
has_many:groups_users
has_many:users, through:groups_users
has_many:twwets