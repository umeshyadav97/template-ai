import React, { useEffect, useRef } from "react"
import Head from "next/head"
import TemplateGrid from "@local/components/TemplateGrid"
import { Box, Divider, Grid, Typography } from "@mui/material"
import SelectionBox from "@local/components/TemplateGrid/SelectionBox"
import { useHomeController } from "@local/controllers/privateControllers/home.controller"
import TemplateDetail from "@local/components/TemplateDetail"
import BaseLoader from "@local/components/Loader/SkeletonLoader/BaseLoader"
import InfiniteScroll from "react-infinite-scroll-component"
import PaginationLoader from "@local/components/Loader/PaginationLoader"
import Image from "next/image"
import NoData from "@local/assets/images/backgrounds/noData.png"
import DialogCard from "@local/components/Dialog"
import { trackStudioPageView } from "@local/helpers/google-analytics-events"
import TextLoader from "@local/components/Loader/SkeletonLoader/TextLoader"
function Home() {
  const {
    selectedCards,
    handleCardSelect,
    handleClear,
    handleView,
    isOpen,
    handleClose,
    templateDetail,
    handleChnage,
    handleAdd,
    handleRemove,
    handleRecord,
    record,
    fetchMoreData,
    hasMore,
    page,
    category,
    amount,
    setPage,
    warningModal,
    setWarningModal,
    isFromQuiz,
    visible,
    moreTemplate
  } = useHomeController()

  useEffect(() => {
    setPage(1)
    const Filter = { page: page, page_size: 9 }
    handleRecord(Filter, category, amount)
    // eslint-disable-next-line
  }, [category, amount])
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef?.current
    const handleScroll = () => {
      if (hasMore && container?.scrollTop + container?.clientHeight >= container?.scrollHeight) {
        fetchMoreData()
      }
    }
    container?.addEventListener("scroll", handleScroll)
    return () => {
      container?.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMoreData])

  useEffect(() => {
    const deviceWidth = window?.innerWidth
    if (deviceWidth < 600) {
      setWarningModal(true)
    } else {
      setWarningModal(false)
    }
    // eslint-disable-next-line
  }, [window?.innerWidth])

  useEffect(() => {
    trackStudioPageView()
    // eslint-disable-next-line
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Strope.AI - Atelier</title>
      </Head>

      <Box sx={{ pb: "8rem" }}>
        <Box sx={{ padding: "24px", display: "flex", gap: "5px", alignItems: "center" }}>
          {visible && isFromQuiz ? (
            <TextLoader width={210} />
          ) : (
            <Typography variant="h4">
              {isFromQuiz ? "Recommended Templates" : "Choose a base"}
            </Typography>
          )}
        </Box>
        <Divider sx={{ borderColor: "text.gray2" }} />
        <Box sx={{ padding: "0 24px 0px 24px" }}>
          {/* <Box sx={{ margin: "24px 0" }}> */}
          {/* <ToggleButtonGroup
              value={selectedButton}
              exclusive
              onChange={handleButtonChange}
              aria-label="button group"
              sx={{ display: "flex", gap: "20px" }}>
              <BorderLessToggleButton value="all" aria-label="all">
                ALL
              </BorderLessToggleButton> */}
          {/* For feature update */}
          {/* <BorderLessToggleButton value="store" aria-label="store">
            Store
          </BorderLessToggleButton>
          <BorderLessToggleButton value="pro" aria-label="pro">
            Pro
          </BorderLessToggleButton> */}
          {/* </ToggleButtonGroup>
          </Box> */}
          <Box sx={{ margin: "10px 0" }}>
            <Typography variant="p2">
              Choose a template (apps similar to your idea) to use as a base.
            </Typography>
          </Box>
          <Box>
            {visible && (
              <Grid container spacing={2} mt={1}>
                {LoaderArray?.map((i) => (
                  <BaseLoader key={i} />
                ))}
              </Grid>
            )}
            {record?.length && !visible ? (
              <div ref={containerRef} style={{ height: hasMore && "120vh", overflow: "auto" }}>
                <InfiniteScroll
                  dataLength={record?.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  loader={<PaginationLoader />}
                  style={{ overflow: "inherit" }}
                  scrollThreshold={0.9}>
                  <Grid container spacing={2}>
                    {record?.map((template, i) => (
                      <TemplateGrid
                        template={template}
                        key={i}
                        isSelected={selectedCards.some(
                          (selectedTemplate) => selectedTemplate?.id === template?.id
                        )}
                        handleView={handleView}
                        onSelect={handleCardSelect}
                      />
                    ))}
                  </Grid>
                </InfiniteScroll>
              </div>
            ) : null}

            {!record?.length > 0 && !visible && (
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{ padding: "3rem" }}>
                <Image src={NoData} alt="no data found" />
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="h4" mb={2}>
                    We couldn’t find any matches
                  </Typography>
                  <Typography variant="c2" sx={{ color: "#475467" }}>
                    Looks like there are no template currently. Try searching something else
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Box>
          {selectedCards?.length > 0 && (
            <SelectionBox
              selectedCards={selectedCards}
              handleClear={handleClear}
              handleChnage={handleChnage}
            />
          )}
        </Box>
        {isFromQuiz && moreTemplate.length > 0 && (
          <Box sx={{ mt: "2rem" }}>
            <Box>
              <Box sx={{ padding: "24px", display: "flex", gap: "5px", alignItems: "center" }}>
                {visible ? (
                  <TextLoader width={210} />
                ) : (
                  <Typography variant="h4">{isFromQuiz && "More Templates"}</Typography>
                )}
              </Box>
            </Box>
            <Divider sx={{ borderColor: "text.gray2" }} />
            <Box sx={{ padding: "0 24px 0px 24px", mt: "2rem" }}>
              <Grid container spacing={2}>
                {moreTemplate?.map((template, i) => (
                  <TemplateGrid
                    template={template}
                    key={i}
                    isSelected={selectedCards.some(
                      (selectedTemplate) => selectedTemplate?.id === template?.id
                    )}
                    handleView={handleView}
                    onSelect={handleCardSelect}
                  />
                ))}
              </Grid>
            </Box>
          </Box>
        )}
      </Box>
      <TemplateDetail
        templateDetail={templateDetail}
        open={isOpen}
        handleClose={handleClose}
        handleAdd={handleAdd}
        selectedCards={selectedCards}
        handleRemove={handleRemove}
      />
      <DialogCard
        open={warningModal}
        handleClose={() => setWarningModal(false)}
        title="Warning"
        width="sm"
        subtitle="For best experience open in Tablet Devices"
      />
    </React.Fragment>
  )
}

export default Home

const LoaderArray = ["", "", "", "", "", ""]
