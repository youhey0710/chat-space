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
has_many :messages, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
has_many :groups_users
has_many :users, through: :groups_users
has_many :messages, through: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|date|text|null: false|
|time|text|null: false|
|comment|text|null: false|

### Association
has_many :groups_users
has_many :users, through: :groups_users
has_many :groups, through: :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :message


