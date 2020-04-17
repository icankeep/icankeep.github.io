create table file_info
     (
     	file_id int auto_increment comment '文件id',
     	file_key varchar(300) null comment '文件唯一key，用于在硬盘中的文件名',
     	file_name varchar(300) null comment '原文件名',
     	create_time datetime not null DEFAULT CURRENT_TIMESTAMP comment '创建时间',
     	update_last_time datetime not null ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment '最近更新时间',
     	user_id int null comment '用户id',
     	file_status tinyint null comment '0为转换中，1为转换完成，2为过期文件',
     	file_format_change_type tinyint null comment '文件格式转换的类型，0为word2pdf，1为pdf2word，2为markdown2pdf，3为markdown2html，4为word translate，5为html2pdf',
     	constraint file_info_pk
     		primary key (file_id)
     )
     comment '文件相关的信息'