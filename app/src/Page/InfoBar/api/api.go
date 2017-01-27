package main

import "gopkg.in/gin-gonic/gin.v1"

//RecoveryInfo store the GB, number of files and ETA of a recovery
type RecoveryInfo struct {
	Bytes float32
	Files int
	ETA   string
}

func main() {
	server := gin.Default()
	RI := RecoveryInfo{
		Bytes: 58.8,
		Files: 5385,
		ETA:   "6hr0m5s",
	}
	server.GET("/info", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*") // <-- I have NO idea what this mean ¯\_(ツ)_/¯
		c.JSON(200, RI)
	})
	server.Run(":8080")
}
