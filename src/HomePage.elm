module HomePage exposing (main)


import Html exposing (..)
import Html.Attributes exposing (..)


view model =
    div [ class "jumbotron" ]
        [ h1 [] [ text "Welcome to my website!" ]
        , p []
            [ text "Who am I?"
            , strong [] [ text "About:" ]
            , text <|
                    """
                    I am a 21 year old software engineer, linux enthusiast
                    and open source contributor. You can check out my work 
                    on github.
                    """
                ]
        ]



main =
        view "dummy model"
