---
title: Label
---

The Label component is used to add contextual metadata to a design. Visually it styles text, adds padding, and rounded corners.

## Default example

```jsx live
  <Label variant="small" outline sx={{borderColor: "border.danger", mr: 2, color: "text.danger"}}>small</Label>
  <Label variant="medium" sx={{mr: 2}}>medium (default)</Label>
  <Label variant="large" sx={{mr: 2}}>large</Label>
  <Label variant="xl">xl label</Label>

  <Box mt={4}/>
  <Label variant="medium" sx={{bg:"#A575FF", m: 1}}>good first issue</Label>
  <Label variant="medium" sx={{bg:"#FF75C8", m: 1}}>🚂 deploy: train</Label>
  <Label variant="medium" sx={{bg:"#1C90FA", m: 1}}>css</Label>
  <Label variant="medium" sx={{bg:"#FFF06C", color:"#24292E", m: 1}}>documentation</Label>
  <Label variant="medium" sx={{bg: "#656BFE", m: 1}}>primer</Label>
```

## System props

<Note variant="warning">

System props are deprecated in all components except [Box](/Box). Please use the [`sx` prop](/overriding-styles) instead.

</Note>

Label components get `COMMON` system props. Read our [System Props](/system-props) doc page for a full list of available props.

## Component props

| Name       | Type    |        Default         | Description                                                                    |
| :--------- | :------ | :--------------------: | :----------------------------------------------------------------------------- |
| outline    | Boolean |                        | Creates an outline style label                                                 |
| variant    | String  |        'medium'        | Can be one of `small`, `medium` (default), `large` or `xl` .                   |
| dropshadow | Boolean |                        | Adds a dropshadow to the label                                                 |
| bg         | String  | 'label.primary.border' | Part of the `COMMON` system props, used to change the background of the label. |
