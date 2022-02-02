import React from "react";
import { ButtonGroup, Button, Tooltip } from "@mui/material";
import { inject, observer } from "mobx-react"

const Toolbar = inject("rootStore", "managmentStore")(observer(({ managmentStore }) => (
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Tooltip title="Создать страницу">
            <Button onClick={() => managmentStore.setPageCreationList("dialogOpen", true)}> Создать </Button>
        </Tooltip>
    </ButtonGroup>
)));


export default Toolbar;