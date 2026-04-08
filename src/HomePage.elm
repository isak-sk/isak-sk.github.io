module HomePage exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)

main =
    Browser.sandbox { init = init, update = update, view = view }

type alias Model = {}

init : Model
init = {}

type Msg = NoOp

update : Msg -> Model -> Model
update _ model = model

view : Model -> Html Msg
view _ =
    div [ class "container" ]
        [ section [ class "intro" ]
            [ img [ src "img/img.jpeg", class "avatar" ] []
            , h1 [] [ text "Isak Skoog" ]
            , p [ class "tagline" ] [ text "21yo · CS Student · Quant Dev @ Silverbeard Engineering" ]
            , p [ class "bio" ] 
                [ text "Low-level enthusiast focusing on trading systems and infrastructure. I like "
                , span [ class "lang" ] [ text "Python, Rust and C." ]
                ]
            ]
        
        , section []
            [ h2 [] [ text "Experience" ]
            , div [ class "entry" ] [ b [] [ text "Silverbeard Engineering" ], span [] [ text " — Software Engineer" ] ]
            , div [ class "entry" ] [ b [] [ text "Eniwa AG" ], span [] [ text " — Software Engineer Intern (Switzerland)" ] ]
            , div [ class "entry" ] [ b [] [ text "UBS" ], span [] [ text " — Platform Engineer Apprentice" ] ]
            ]

        , section []
            [ h2 [] [ text "Projects" ]
            , a [ href "https://github.com/isak-sk/cli_launcher", class "proj-link" ] [ text "cli-launcher (Rust)" ]
            , a [ href "https://github.com/isak-sk/battery_sim", class "proj-link" ] [ text "battery-sim (Rust)" ]
            , a [ href "https://github.com/isak-sk/epidemic-sim", class "proj-link" ] [ text "epidemic-sim (Python)" ]
            ]

        , footer []
            [ a [ href "https://github.com/isak-sk" ] [ text "github" ]
            , text " / "
            , a [ href "https://linkedin.com/in/isakskoog" ] [ text "linkedin" ]
            , text " / "
            , a [ href "mailto:skoog.isak@gmail.com" ] [ text "email" ]
            ]
        ]
