# 规范化物资存储格式

#### 物资类结构体
 --- 物资名称：name 字符串
 --- 物资结构体[index] 结构体
 --- 上传者结构体 结构体
 --- 备注 字符串
 --- 图片链接 字符串


#### 物资结构体
 --- 编号[index] 整型
 --- 当前状态 整型 （`0`代表不可用；`1`代表可用）
 --- 借用信息结构体 结构体

#### 上传者结构体
 --- 上传者姓名 字符串
 --- 上传者学号 字符串
 --- 上传日期 字符串
 --- 审核人 字符串

#### 借用信息结构体
 --- 借用者姓名 字符串
 --- 借用者学号 字符串
 --- 借用理由 字符串
 --- 归还日期 字符串 （这个大概没什么用）
 --- 审核人 字符串



### 示例:
物资项目 **project[Object]**
- 椅子 **title[String]**
- 主列表 **MainList[List]**
    - 物资结构体 **materialStruct[Object]**
        - 1 index(不用传，会自动生成)
        - 不可用 **status[整数]**
        - 借用信息结构体 **lendInfoStruct[Object]**
            - 借用 张三 **lender[String]**
            - U202114514 **lenderNum[String]**
            - 组织活动 **useFor[String]**
            - 2月30日 **returnDate[String]**
            - 审核 王五 **verify[string]**
    - 物资结构体 **materialStruct[Object]**
        - 2 index(不用传，会自动生成)
        - 可用 **status[整数]**
        - 借用信息结构体 **lendInfoStruct[Object]**
            - 借用 张三 **lender[String]**
            - U202114514 **lenderNum[String]**
            - 组织活动 **useFor[String]**
            - 2月30日 **returnDate[String]**
            - 审核 王五 **verify[string]**
    - 物资结构体 **materialStruct[Object]**
        - 3 index(不用传，会自动生成)
        - 可用 **status[整数]**
        - 借用信息结构体 **lendInfoStruct[Object]**
            - 借用 张三 **lender[String]**
            - U202114514 **lenderNum[String]**
            - 组织活动 **useFor[String]**
            - 2月30日 **returnDate[String]**
            - 审核 王五 **verify[string]**
- 上传者结构体 **updateInfoStruct[Object]**
        - 上传 李四 **update[String]**
        - U12233333 **updateNumber[String]**
        - 1月1日 **updateDate[String]**
        - 审核 倪甘玛 **verify[String]**
- 保存完好 **detail[String]**
- xxx.png **detailPhoto[未知的图片格式]**