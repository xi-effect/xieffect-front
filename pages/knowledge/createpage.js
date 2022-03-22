/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import { inject, observer } from "mobx-react";
import Head from "next/head";
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useUnmount } from "react-use";
import { useSnackbar } from "notistack";
import NavigationAll from "../../components/OtherComponents/Navigation/NavigationAll";

import StepOne from "../../components/PagesComponents/Managment/Content/Pages/DialogPageCreation/StepOne";
import StepTwo from "../../components/PagesComponents/Managment/Content/Pages/DialogPageCreation/StepTwo";
import StepThree from "../../components/PagesComponents/Managment/Content/Pages/DialogPageCreation/StepThree";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const components = [
    { type: "text", fontSize: 14, textAlign: "left", fontWeight: "normal", fontStyle: "normal", textDecoration: "none", label: "текст" },
    { type: "h", fontSize: 36, textAlign: "center", fontWeight: "normal", fontStyle: "normal", textDecoration: "none", label: "заголовок" },
    { type: "markdown", label: "markdown" },
    { type: "divider", },
    { type: "quiz", quizType: "single", fontSize: 14, textAlign: "left", fontWeight: "normal", fontStyle: "normal", textDecoration: "none", content: [{ label: "", }], rightAnswers: [], userAnswers: [], successAnswer: null },
    { type: "alert", alertType: "success", fontSize: 14, textAlign: "left", fontWeight: "normal", fontStyle: "normal", textDecoration: "none", label: "текст уведомления" },
    { type: "list", listType: "dotted", fontSize: 14, textAlign: "left", fontWeight: "normal", fontStyle: "normal", textDecoration: "none", content: [{ label: "", },] },
    { type: "numanswer", label: 0, userAnswer: null },
    { type: "code", label: "code", lang: 0, },
    { type: "img", authorId: null, imageId: null, },
]

const Createpage = inject("knowledgeSt", "managmentSt", "uiSt")(observer(({ managmentSt, uiSt }) => {
    const { enqueueSnackbar } = useSnackbar();
    useUnmount(() => {
        if (managmentSt.pageCreation.id) {
            managmentSt.savePage(true)
            enqueueSnackbar("Страница сохранена", {
                variant: "success",
            })
        }
    });

    function onDragEnd(result) {
        console.log("result", result)
        // Перетаскивание не произошо
        if (!result.destination) {
            return;
        }

        if (result.source.droppableId === "list-components" && result.destination.droppableId === "componentsList") {
            console.log("list-pages")
            const newArray = [...managmentSt.pageCreation.components]
            console.log("newArray", newArray, components[result.source.index])
            newArray.splice(result.destination.index, 0, components[result.source.index])
            console.log("newArray", newArray)
            managmentSt.setPageCreation("components", newArray)
            return;

        }

        // Перетаскивание в рамках одной точки
        if (result.destination.droppableId === result.source.droppableId) {
            const quotes = reorder(
                managmentSt.pageCreation.components,
                result.source.index,
                result.destination.index
            );
            managmentSt.setPageCreation("components", quotes)
            // console.log("pointsnotgood", result)
        }

        // //Перетаскивание между точками 
        // if (result.source.droppableId != "list-pages" && result.destination.droppableId != result.source.droppableId) {
        //     let newArray = managmentSt.moduleCreation.points[Number(result.destination.droppableId.slice(5))].pages
        //     let newPage = managmentSt.moduleCreation.points[Number(result.source.droppableId.slice(5))].pages[result.source.index]
        //     newArray.splice(result.destination.index, 0, newPage)
        //     managmentSt.setModuleCreationPoints(Number(result.destination.droppableId.slice(5)), "pages", newArray)
        //     managmentSt.deletePageInPoint(result.source.droppableId.slice(5), result.source.index)
        //     console.log("points", result)
        // }

        // Перетаскивание не произошо, место объекто не изменено
        // if (result.destination.index === result.source.index) {

        // }

    }

    return (
        <>
            <Head>
                <title>
                    Ξffect | Создание страницы
                </title>
                <meta name="robots" content="noindex" />
            </Head>
            <DragDropContext
                // onBeforeCapture={onBeforeCapture}
                // onBeforeDragStart={onBeforeDragStart}
                // onDragStart={onDragStart}
                // onDragUpdate={onDragUpdate}
                onDragEnd={onDragEnd}
            >
                <NavigationAll>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        sx={{
                            width: "100%",
                            minHeight: "90vh",
                            zIndex: 1,
                        }}
                    >
                        {uiSt.knowledge.activeStep === 0 && <StepOne />}
                        {uiSt.knowledge.activeStep === 1 && <StepTwo />}
                        {uiSt.knowledge.activeStep === 2 && <StepThree />}
                    </Grid>
                </NavigationAll>
            </DragDropContext >
        </>
    )
}));

export default Createpage;