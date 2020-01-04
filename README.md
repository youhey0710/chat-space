# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|address|text|null: false, unique: true|
|password|text|null: false|

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|date|text|null: false|
|time|text|null: false|
|comment|text|null: false|

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :message


