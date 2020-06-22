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
|user_name|string|null: false,
add_index: true|
|email|string|null: false,
unique: true|
|password|string|null:false|

### asociation
has_many:groups_users
has_many:tweets

## tweets
|Column|Type|Options|
|------|----|-------|
|message|string|text|image|null:false, add_index: true|

### asociation
has_many :users