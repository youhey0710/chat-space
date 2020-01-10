# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|address|text|null: false, unique: true|
|password|text|null: false|

### Association
has_many :groups_users
has_many :groups, through: :groups_users
has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
has_many :groups_users
has_many :users, through: :groups_users
has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|message|text|null: false|
|image|text||


### Association
belongs_to:groups_users
belongs_to:users, through: :groups_users
belongs_to:groups


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


