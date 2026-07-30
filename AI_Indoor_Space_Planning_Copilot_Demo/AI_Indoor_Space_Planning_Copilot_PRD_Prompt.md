# AI Indoor Space Planning Copilot Demo

## AI建筑/空间设计助手产品设计与技术开发文档

Version: MVP 1.0

Page Size: 1200*600

------------------------------------------------------------------------

# 1. 产品概述

## 产品名称

AI Indoor Space Planning Copilot

## 产品定位

一个面向室内设计师、建筑设计师和连锁品牌营建团队的 AI 辅助空间规划工具。

这是一个主页面的平面设计web平台demo

通过自然语言需求输入，AI 自动生成多个空间规划方案，并提供：

-   只提供类似功能泡泡图的平面布局功能（功能分区、面积大小）
-   可编辑 2D 平面布局

------------------------------------------------------------------------

# 2. 产品目标

Demo 目标：

不是替代 CAD/Revit，而是验证：

> AI 是否可以参与早期室内空间规划布局。

展示：

1.  AI 理解业务需求
2.  AI 生成空间方案
3.  人机协同修改
4.  AI 根据修改重新生成建议

------------------------------------------------------------------------

# 3. 用户场景

## 用户1：室内设计师

输入：

"设计一个50㎡现代工业风咖啡店，需要8个座位"

AI生成：

-   Layout方案A
-   Layout方案B
-   Layout方案C

设计师：

-   拖动空间区域（区域可以是多边形，但符合空间使用效率）
-   修改尺寸
-   调整布局

AI同步更新。

------------------------------------------------------------------------

# 4. MVP功能模块

# Module 1: AI Project Brief

用户输入：

-   项目类型
-   面积
-   座位数量
-   风格
-   品牌要求

Mock AI 输出结构化数据：

``` json
{
"type":"coffee_shop",
"area":50,
"seats":8,
"style":"industrial",
"brand":"regular"
}
```

------------------------------------------------------------------------

# Module 2: AI Multi Concept Generator

根据需求AI会先生成多个方案供参考：

## Concept A
Efficiency Priority
特点：
-   更多座位
-   更短动线

## Concept B
Experience Priority
特点：
-   更强空间体验

## Concept C
Brand and Style Priority
特点：
-   更符合品牌规范

示例数据：

``` json
{
"concepts":[
{
"id":"A",
"name":"Efficiency Layout",
"zones":[
{
"type":"seating",
“x”:0,
“y”:0,
"width":4m,
"height":3m
},
{
"type":"bar",
“x”:0,
“y”:3,
"width”:1.2m,
"height":2m
}
]
}
]
}
```

------------------------------------------------------------------------

# Module 3: Editable 2D Floor Plan Editor

技术：

-   React Konva

实现：

-   Canvas绘制
-   Drag & Drop
-   Resize(总平面本身可以调整，内部泡泡图布局也能调整）
-   Snap Alignment
-   Collision Detection

所有空间元素使用 JSON 描述：

``` json
{
"id":"bar01",
"type":"bar",
"x":5,
"y":1,
"width”:1.2m,
"height":2m,
"rotation":0
}
```

# Konva交互能力

## 拖动

用户修改空间位置。

## 自动吸附

Grid snapping：

    gridSize = 20
    拖动：x=103
    自动：x=100

## 对齐辅助线

类似 Figma：

-   左对齐
-   右对齐
-   中心对齐
如果接近：显示guide line。

## 碰撞检测

Rectangle Collision：

``` javascript
if(
a.x < b.x+b.width &&
a.x+a.width > b.x &&
a.y < b.y+b.height &&
a.height+a.y > b.y
)
{
collision=true
}
```
反馈：
红色警告：
"Kitchen overlaps seating area"

------------------------------------------------------------------------

# Module 4: Human Modification Sync

流程：

    AI Generated Layout

    ↓

    User Edit

    ↓

    Updated JSON

    ↓

    Backend (FastAPI)

    ↓

    Mock AI Re-analysis

    ↓

    Updated Recommendation

用户：

"把吧台移动到入口"

Frontend发送：

``` json
{
"type":"bar",
“x”:1
}
```
发送：
POST: /api/layout/update

Backend：
Mock AI:
重新计算：
-circulation
-seating capacity
-brand and style score
返回:
``` json
{
"message":"Moving bar closer improves customer flow",
"score":92
}
```

------------------------------------------------------------------------

#5. 原型布局
┌──────────────────────────────────────────────────────────┐
│ Toolbar                                                  │
├───────────────┬─────────────────────────────┬────────────┤
│               │                             │            │
│ Resource      │   AI Concept Result Layover │ Properties │
│               │             Floor Plan      │            │
│               │                             │            │
│               │                             │            │
│               │                             │            │
│               │         AI ChatBox          │            │
└───────────────┴─────────────────────────────┴────────────┘
Toolbar展示基础撤销/重做/放大/缩小/保存成图片等功能；
Resource包含不同功能，可以drag进floor plan；
Properties 展示和调节功能泡泡的尺寸，如展示面积、座位数；
AI ChatBox 可以文字描述生成三个平面图layover显示，用户可以选择一个满意的，进一步编辑floor plan。

------------------------------------------------------------------------

# 6. Frontend技术

Framework:

React

UI:

Tailwind CSS

Canvas:

React Konva

State:

Zustand

管理：

-   current layout
-   selected object
-   undo/redo

------------------------------------------------------------------------

# 7. Backend技术

Framework:

FastAPI

Language:

Python

Database:

JSON Mock Database

mock AI data
